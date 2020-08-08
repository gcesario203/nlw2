import React from 'react'
import PageHeader from '../../components/PageHeader'
import InputField from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'

function TeacherForm(){
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
                <InputField name="subject" label="Matéria"></InputField>
                <InputField name="cost" label="Custo de sua aula por hora"></InputField>
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