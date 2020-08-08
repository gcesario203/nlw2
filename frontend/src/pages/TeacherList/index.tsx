import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import InputField from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
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
                        options={[
                            {value: '0', label:'Domingo'},
                            {value: '1', label:'Segunda'},
                            {value: '2', label:'Terça'},
                            {value: '3 I', label:'Quarta'},
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
                    >
                    </InputField>
                </form>
            </PageHeader>
            <main>
                <TeacherItem></TeacherItem>
            </main>
        </div>
    );
}

export default TeacherList