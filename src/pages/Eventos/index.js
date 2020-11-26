import React from 'react';
import RootPage from '../../components/RootPage';
import './style.css';

import img1 from '../../assets/images/carrossel1.jpg'
import img2 from '../../assets/images/home5.jpg'


function Noticias(){
    return(
        <RootPage>
            <h1 className="noticias-title-card">Confira os nossos eventos</h1>

            <div className="card-noticias">

                <div className="card-noticias-img">

                    <img 
                        className="noticias-img"
                        src={img1}
                    />

                </div>

                <div className="noticias-text-card"> 

                    <h1 className="noticias-title">Os Feras da Trilha e os Lameiros!</h1>

                    <p className="noticias-text">
                        Em Setembro de 2020, os Feras da Trilha e os Lameiros Off Road em confraternação,
                        realizaram um encontro em Pontal. Trilha, churrasco e muita adrenalina em uma tarde
                        ensolarada.
                    </p>

                    <a href="https://youtu.be/CkedrYD2nVE" target="_blank"><button className="noticia-btn">

                        <p>
                            SAIBA MAIS &gt;
                        </p>

                    </button></a>

                </div>

            </div>  


            <div className="card-noticias">

                <div className="card-noticias-img">

                    <img 
                        className="noticias-img"
                        src={img2}
                    />

                </div>

                <div className="noticias-text-card"> 

                    <h1 className="noticias-title">3° Aniversário dos Feras da Trilha!</h1>

                    <p className="noticias-text">
                        Fim de semana muito animado, teve trilha e muita curtição. 
                        Evento top, que resultou em diversão. Comemoração do grupo pelo 3 aniversário!
                    </p>

                    <a href="https://youtu.be/lJAnAV-3bmQ" target="_blank"><button className="noticia-btn">

                        <p>
                            SAIBA MAIS &gt;
                        </p>

                    </button></a>

                </div>

            </div>     

        </RootPage>
    )
}

export default Noticias;