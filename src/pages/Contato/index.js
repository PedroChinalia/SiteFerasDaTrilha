import React from 'react';
import Header from '../../components/Header';
import './style.css';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

function Home(){
    return(
        <>
            <Header>
            </Header>

            <h1 className="title">Fale Conosco</h1>
            
            <div className="contact">

                <div className="contact-card">
                    <h1>Entre em contato</h1>
                    <div className="cards-container">
                        
                        <p>Jaboticabal, Monte-Alto, Guariba - SP</p>
                        <p>Whatsapp: (16) 99961-0190</p>
                        <p>Email: ferasdatrilha@gmail.com</p>

                    </div>
                </div>

                <div className="contact-card">
                    <h1>Nossas redes sociais</h1>
                    <div className="cards-container">

                        <a href="https://www.facebook.com/Os-Feras-da-Trilha-388246725070749/" target="_blank"><button className="btn">     
                                    <p><FaFacebook className="icon"/>  Facebook</p>   
                        </button></a>

                        <a href="https://www.instagram.com/oficialosferasdatrilha/?hl=pt-br" target="_blank"><button className="btn">
                                <p><FaInstagram className="icon"/>  Instagram</p>
                        </button></a>

                        <a href="https://www.youtube.com/channel/UCvm4bQlNW_gDQHgVsR0CKqQ" target="_blank"><button className="btn">
                                <p><FaYoutube className="icon"/>  Youtube</p>
                        </button></a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home;