import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaFontAwesomeLogoFull} from 'react-icons/fa';
import logo from '../../assets/images/logo.png'

//importanto Estilização do componente

import './style.css';

function Header(){
    const [showMenu, setShowMenu] = useState(false);
    let menu;
    if(showMenu){
        menu = 
        <div className="menu">
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
    }

    return(
        <div className="header">
      
            <div className="topside-header">
                <button>
                <Link className="link" to="/contato">FALE CONOSCO</Link>
                </button>
            </div>
            <div className="bottomside-header">
                <span
                    className="barsIcon"
                >
                    <FaBars 
                        color='#fff'
                        onClick={()=>setShowMenu(!showMenu)}
                    />
                </span>
                {menu}  
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