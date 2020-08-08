import React from 'react'
import './styles.css'
import Zipzip from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher{
    id:number,
    user_id: number,
    subject:string,
    cost:number,
    name:string,
    avatar:string,
    whatsapp:string,
    bio: string
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher}) =>{

    function createNewConnection(){
        api.post('connections',{
            user_id:teacher.id
        })
    }
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/37389862?s=460&u=15cab2ca0705c442dfd5bbd44ef3005201ac2e69&v=4" alt="kk"/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>
        <footer>
                <p>Preço por hora <strong>R$ {teacher.cost}</strong></p>

            <a
                target="_blank"
                onClick={createNewConnection}
                href={
                `https://wa.me/${teacher.whatsapp}`
            }>
                <button type="button">
                    <img src={Zipzip} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </a>
        </footer>
    </article>
    )
}

export default TeacherItem