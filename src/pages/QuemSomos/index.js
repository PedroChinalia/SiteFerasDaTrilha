import React from 'react';

import RootPage from '../../components/RootPage';
import img1 from '../../assets/images/quemsomos1.jpg'
import img2 from '../../assets/images/quemsomos2.jpg'

import './style.css';

function QuemSomos(){
    return(
        <RootPage>
            <div className="desc-item">
                <div>
        
                    <h1>Quem somos</h1>
                    <p>
                        Há 3 anos nascia Os Feras da Trilha, um grupo de amigos apaixonados pelo Off Road. 
                        Daí em diante a união e a força só tem aumentado. Nosso grupo é uma grande família. 
                        Os finais de semana são marcados por muita poeira ou muita lama, mas principalmente por uma união famíliar. 
                        Juntamos tudo, tem diversão para todos, as mulheres marcam presença e as crianças adoram, é só curtição!
                    </p>
                   
                </div>

                <img 
                    className="imagemQuemSomos"
                    src={img1}
                />

            </div>

            <div className="desc-item-reverse">

                <div>

                    <h1>Nosso Objetivo</h1>
                    <p>
                        Apaixonados por Off Road, participamos de eventos em várias cidades, 
                        desfiles de aniversário de Monte Alto, Jaboticabal e Guariba, e sempre 
                        que somos procurados nos unimos por projetos sociais. 
                        Aqui o lema é "NOS PIORES CAMINHOS, COM OS MELHORES AMIGOS".
                    </p>

                </div>

                <img 
                    className="imagemQuemSomosR"
                    src={img2}
                />

            </div>
        </RootPage>
    )
}

export default QuemSomos;