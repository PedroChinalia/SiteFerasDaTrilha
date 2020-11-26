import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//Importanto Paginas
import Home from './pages/Home';
import Contato from './pages/Contato';
import QuemSomos from './pages/QuemSomos';
import Trilhas from './pages/Trilhas';
import Eventos from './pages/Eventos';


function Routes(){
    return(
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/quemsomos" component={QuemSomos}/>          
            <Route path="/trilhas" component={Trilhas}/>
            <Route path="/eventos" component={Eventos}/>
        </Router>
    )
}

export default Routes;