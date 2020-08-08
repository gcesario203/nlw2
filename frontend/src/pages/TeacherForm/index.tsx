import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import InputField from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
function TeacherForm(){
    const [scheduleItems, setScheduleItems] =  useState([
        {week_day:0, from:'', to:''}
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:0,from:'',to:''}
        ])
    }

    return(
    <div id="page-teacher-form" className="container">
        <PageHeader
            title="Que incrivel que você quer dar aulas."
            description="Basta preencher este formulaário"
        >
        </PageHeader>

        <main>
            <fieldset>
                <legend>Seus Dados</legend>
                <InputField name="name" label="Nome Completo"></InputField>
                <InputField name="avatar" label="Avatar"></InputField>
                <InputField name="whatsapp" label="Whatsapp"></InputField>
                <Textarea name="bio" label="Biografia"></Textarea>
            </fieldset>
            <fieldset>
                <legend>Sobre à aula</legend>
                <Select
                    name="subject"
                    label="Matéria"
                    options={[
                        {value: 'Artes', label:'Artes'},
                        {value: 'Matematica', label:'Matematica'},
                        {value: 'Português', label:'Português'},
                        {value: 'Calculo I', label:'Calculo I'},
                        {value: 'Física', label:'Física'},
                        {value: 'Química', label:'Química'},
                        {value: 'História', label:'História'},
                    ]}
                >
                </Select>
                <InputField name="cost" label="Custo de sua aula por hora"></InputField>
            </fieldset>
            <fieldset>
                <legend>
                    Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}> + Novo horário</button>
                </legend>
                {scheduleItems.map(scheduleItem=>{
                    return (
                        <div className="schedule-item" key={scheduleItem.week_day}>
                    <Select
                            name="week-day"
                            label="Dia da Semana"
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
                        <InputField name="from" label="Das" type="time"></InputField>
                        <InputField name="to" label="Até" type="time"></InputField>
                </div>
                    )
                })}
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante<br/>
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar
                </button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm