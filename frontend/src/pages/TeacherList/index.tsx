import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import InputField from '../../components/Input'

import './styles.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <InputField
                        name="subject"
                        label="Matérias"
                    >
                    </InputField>

                    <InputField
                        name="week-day"
                        label="Dia da Semana"
                    >
                    </InputField>
                    
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