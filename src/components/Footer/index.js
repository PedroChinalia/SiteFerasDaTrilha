import React from 'react';
import {
    FaPhone,
    FaWhatsapp,
    FaLocationArrow,
    FaSearchLocation,
    FaHome,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaMailchimp,
    FaVoicemail,
} from 'react-icons/fa';

import './style.css'

function Footer(){
    return(
        <div className="footer">
            
            <div className="footer-card">
                <h1>Entre em contato</h1>

                <p><FaWhatsapp size={14}/> (16) 99961-0190</p>
                <p><FaVoicemail/> ferasdatrilha@gmail.com</p>

            </div>

            <div className="footer-card">
                <h1>Onde estamos</h1>

                <p><FaLocationArrow size={14}/> Monte Alto - SP</p>
                <p><FaLocationArrow size={14}/> Jaboticabal - SP</p>
                <p><FaLocationArrow size={14}/> Guariba - SP</p>
            </div>

            <div className="footer-card">
                <h1>Redes Sociais</h1>

                <a href="https://www.facebook.com/Os-Feras-da-Trilha-388246725070749/" target="_blank"><button className="btn">     
                    <p><FaFacebook/>  Facebook</p>   
                </button></a>

                <a href="https://www.instagram.com/oficialosferasdatrilha/?hl=pt-br" target="_blank"><button className="btn">
                    <p><FaInstagram/>  Instagram</p>
                </button></a>

                <a href="https://www.youtube.com/channel/UCvm4bQlNW_gDQHgVsR0CKqQ" target="_blank"><button className="btn">
                    <p><FaYoutube/>  Youtube</p>
                </button></a>

            </div>
        </div>
    )
}

export default Footer;