import React from 'react';
import RootPage from '../../components/RootPage';
import SimpleSlider from '../../components/Carousel';
import {Link} from 'react-router-dom';

import img1 from '../../assets/images/home1.jpg'
import img2 from '../../assets/images/home2.jpg'
import img3 from '../../assets/images/home3.jpg'
import img4 from '../../assets/images/home4.jpg'
import img5 from '../../assets/images/home5.jpg'
import img6 from '../../assets/images/home6.jpg'



import './style.css';

function Home(){
    return(
        <RootPage>
            <div className="carousel">
                <SimpleSlider />
            </div>

            <div className="cards">

                <div className="card">
                    <div>

                        <h1>Quem somos</h1>

                        <p className="description">
                            Os Feras da Trilha é um grupo de amigos apaixonados pelo Off Road. 
                            Nosso grupo é uma grande família.
                            Os finais de semana são marcados por muita poeira e muita lama.
                            Juntamos tudo, tem diversão para todos, as mulheres marcam presença e as crianças adoram, é só curtição!
                        </p>

                        <button className="description-btn">
                            <Link className="link" to="/quemsomos">
                                <p>
                                    SAIBA MAIS &gt;
                                </p>
                            </Link>
                        </button>

                    </div>

                    <img 
                        className="card-img"
                        src={img1}
                    />

                    <img 
                        className="card-img"
                        src={img2}
                    />
                    
                </div>   

            </div>

            <div className="cards-reverse">

                <div className="card">
                    <div>

                        <h1>Conheça nossas trilhas</h1>

                        <p className="description">
                            Confira todos os percursos das trilhas que os Feras da Trilha se aventuram!
                            Nossas trilhas são cheias de aventuras e muita diversão, com música, churrasco
                            e muita comemoração.
                        </p>

                        <button className="description-btn">
                            <Link className="link" to="/trilhas">
                                <p>
                                    SAIBA MAIS &gt;
                                </p>
                            </Link>
                        </button>

                    </div>
                    <img 
                        className="card-img"
                        src={img3}
                    />

                    <img 
                        className="card-img"
                        src={img4}
                    />
                </div>

            </div>

            <div className="cards2">

                <div className="card">
                    <div>

                        <h1>Confira nossos eventos</h1>

                        <p className="description">
                            Fique por dentro dos eventos realizados pelos Feras da Trilha.
                            Comemorações de aniversários e eventos beneficentes acontecem todo ano,
                            promovendo muita felicidade e festividade!
                        </p>

                        <button className="description-btn">
                            <Link className="link" to="/eventos">
                                <p>
                                    SAIBA MAIS &gt;
                                </p>
                            </Link>
                        </button>

                    </div>

                    <img 
                        className="card-img"
                        src={img5}
                    />

                    <img 
                        className="card-img"
                        src={img6}
                    />

                </div>   

            </div>

        </RootPage>
    )
}

export default Home;