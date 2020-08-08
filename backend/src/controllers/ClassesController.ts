import {Request, Response} from 'express'

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

export default class ClassesController{
    async index(req:Request, res:Response){
        const filters = req.query;

        if(!filters.subject || !filters.week_day || !filters.time){
            return res.status(400).json({
                error: "Missing filters to search classes",
            })
        }

        const timeInMinutes = convertHourToMinutes(filters.time as string)

        try{
            const classes = await db('classes')
            .whereExists(function(){
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(filters.week_day as string)])
                    .whereRaw('`class_schedule`.`from` <= ??',[timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??',[timeInMinutes])
            })
            .where('classes.subject','=',filters.subject as string)
            .join('users', 'classes.user_id', '=' , 'users.id')
            .select(['classes.*','users.*'])

            return res.json(classes)
        }catch(e){
            return res.send(e)
        }
        }
        async create(req:Request,res:Response){
            const {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                schedule
        } = req.body
    
        const trx = await db.transaction();
    
        try{
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            }).catch(e=>{throw e+' Nos usuarios'})
        
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            }).catch(e=>{throw e+' Nas aulas'})
        
            const class_id = insertedClassesIds[0]
        
            for(let i=0;i<schedule.length;i++){
                const from = convertHourToMinutes(schedule[i].from)
                const to = convertHourToMinutes(schedule[i].to)
        
                await trx('class_schedule').insert({
                    week_day:schedule[i].week_day,
                    from,
                    to,
                    class_id
                }).catch(e=>{throw e+' Nas datas'})
        
            }

            await trx.commit();
        }catch(e)
        {
            await trx.rollback()
            return res.status(400).send(e)
        }
    
        return res.status(201).send('')
    }
}