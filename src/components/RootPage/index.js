import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css';

function RootPage({children}){
    return(
        <>
            <Header/>         
                <div className="content">
                    {children}
                </div>
            <Footer/>
        </>

    )
}

export default RootPage;