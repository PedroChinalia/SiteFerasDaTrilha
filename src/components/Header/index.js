import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/osferas.jpg'

//importanto Estilização do componente

import './style.css';

function Header(){
    return(
        <div className="header">
            
            <div className="topside-header">
                <button>
                    <Link className="link-dark" to="/contato">FALE CONOSCO</Link>
                </button>
            </div>

            <div className="bottomside-header">
                <button>
                    <Link className="link-dark" to="/">HOME</Link>
                </button>

                <button>
                 <Link className="link-dark" to="/quemsomos">QUEM SOMOS</Link>
                </button>

                <button>
                    <Link className="link-dark" to="/trilhas">TRILHAS</Link>
                </button>

                <button>
                    <Link className="link-dark" to="/eventos">EVENTOS</Link>
                </button>

            </div>

            <button>
                <Link to="/">
                <img 
                    className="logo"
                    src={logo}
                />
                </Link>
            </button>

        </div>
    )
}

export default Header;