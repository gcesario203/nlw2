import React, { FormEvent, useState } from 'react'
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import InputField from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api'
function TeacherForm() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
            if(index === position){
                return {...scheduleItem, [field]:value}
            }

            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule:scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso')

            history.push('/')
        }).catch(()=>{
            alert('Falha ao realizar o cadastro')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas."
                description="Basta preencher este formulaário"
            >
            </PageHeader>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <InputField
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        >
                        </InputField>
                        <InputField
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        >
                        </InputField>
                        <InputField
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        >
                        </InputField>

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        >
                        </Textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Sobre à aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Matematica', label: 'Matematica' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Calculo I', label: 'Calculo I' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'História', label: 'História' },
                            ]}
                        >
                        </Select>
                        <InputField
                            name="cost"
                            label="Custo de sua aula por hora"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        ></InputField>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                    <button
                                type="button"
                                onClick={addNewScheduleItem}
                            > + Novo horário
                    </button>
                        </legend>
                        {scheduleItems.map((scheduleItem,index) => {
                            return (
                                <div
                                    className="schedule-item"
                                    key={scheduleItem.week_day}
                                >
                                    <Select
                                        name="week-day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={(e)=> setScheduleItemValue(index,'week_day',e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda' },
                                            { value: '2', label: 'Terça' },
                                            { value: '3', label: 'Quarta' },
                                            { value: '4', label: 'Quinta' },
                                            { value: '5', label: 'Sexta' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    >
                                    </Select>
                                    <InputField
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={(e)=> setScheduleItemValue(index,'from',e.target.value)}
                                    >
                                    </InputField>
                                    <InputField
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={(e)=> setScheduleItemValue(index,'to',e.target.value)}
                                    >
                                    </InputField>
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                    Importante<br />
                    Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm