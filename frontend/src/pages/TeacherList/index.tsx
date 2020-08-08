import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import InputField from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'
import api from '../../services/api'


function TeacherList(){
    const [teachers,setTeachers] = useState([])
    const [subject,setSubject] = useState('')
    const [week_day,setWeek_day] = useState('')
    const [time,setTime] = useState('')

    async function handleSearchTeachers(e:FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                        {   value: 'Artes', label:'Artes'},
                        {   value: 'Matematica', label:'Matematica'},
                        {   value: 'Português', label:'Português'},
                        {   value: 'Calculo I', label:'Calculo I'},
                        {   value: 'Física', label:'Física'},
                        {   value: 'Química', label:'Química'},
                        {   value: 'História', label:'História'},
                        ]}
                    >
                    </Select>
                    <Select
                        name="week-day"
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e)=>{setWeek_day(e.target.value)}}
                        options={[
                            {value: '0', label:'Domingo'},
                            {value: '1', label:'Segunda'},
                            {value: '2', label:'Terça'},
                            {value: '3', label:'Quarta'},
                            {value: '4', label:'Quinta'},
                            {value: '5', label:'Sexta'},
                            {value: '6', label:'Sábado'},
                    ]}
                    >
                    </Select>
                    
                    <InputField
                        name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={(e)=>{
                            setTime(e.target.value)
                        }}
                    >
                    </InputField>

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {
                    teachers.map((teacher:Teacher)=>{
                        return <TeacherItem key={teacher.id} teacher={teacher}></TeacherItem>
                })}
            </main>
        </div>
    );
}

export default TeacherList