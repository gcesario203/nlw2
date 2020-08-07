import React from 'react'
import './styles.css'
import Zipzip from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/37389862?s=460&u=15cab2ca0705c442dfd5bbd44ef3005201ac2e69&v=4" alt="kk"/>
            <div>
                <strong>Cesao</strong>
                <span>Português</span>
            </div>
        </header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        </p>
        <footer>
                <p>Preço por hora <strong>R$ 5.00</strong></p>
            <button type="button">
                <img src={Zipzip} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem