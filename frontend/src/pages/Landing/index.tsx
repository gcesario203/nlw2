import React from 'react'
import Logo from '../../assets/images/logo.svg'
import LandingImage from '../../assets/images/landing.svg'
import Study from '../../assets/images/icons/study.svg'
import GiveClasses from '../../assets/images/icons/give-classes.svg'
import PurpleHeart from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={Logo} alt="logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img
                    src={LandingImage}
                    alt="Plataforme de estudos"
                    className="hero-image"
                />

                <div className="buttons">
                    <a href="" className="study">
                        <img src={Study} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={GiveClasses} alt="De aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões realizadas <img src={PurpleHeart} alt="Coração"/>
                </span>
            </div>
        </div>
    )
}

export default Landing