import React from 'react';
import RootPage from '../../components/RootPage';
import img1 from '../../assets/images/trilhaminari.jpg';
import img2 from '../../assets/images/trilhabambu.jpg';
import img3 from '../../assets/images/trilhacinquenta.jpg'
import './style.css';

function Escola(){
    return(
        <RootPage>

            <h1 className="escola-title">Conheça os nossos percursos</h1>

            <div className="gallery-container">

                <div className="school-gallery">

                    <a href="https://www.facebook.com/388246725070749/posts/712418165986935/" target="_blank"><button className="trilhaBtn">
                        <div className="gallery-item">
                            
                            <img 
                                src={img1}
                                className="gallery-item-img"
                            />

                            <h1>Trilha do Minari</h1>

                        </div>
                    </button></a>

                    <a href="https://youtu.be/P3bJJZ1Vfns" target="_blank"><button className="trilhaBtn">
                        <div className="gallery-item">
                            <img 
                                src={img2}
                                className="gallery-item-img"
                            />

                            <h1>Trilha do Bambu</h1>

                        </div>
                    </button></a>

                    <a href="https://youtu.be/RgHgtXCuhC0" target="_blank"><button className="trilhaBtn">    
                        <div className="gallery-item">
                            <img 
                                src={img3}
                                className="gallery-item-img"
                            />

                            <h1>Trilha dos 50</h1>

                        </div>
                    </button></a>

                </div>

            </div>
            
        </RootPage>
    )
}

export default Escola;