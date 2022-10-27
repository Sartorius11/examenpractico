import React, { Component } from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Apuestas from './Components/Apuestas';
import Home from './Components/Home';
import MenuPrincipal from './Components/MenuPrincipal';
import Equipos from './Components/Equipos';
import Jugadores from './Components/Jugadores';

export default class Router extends Component {
  render() {


    function EquiposElement(){
      var { idequipo }= useParams();
      return(
        <Equipos idequipo={idequipo}/>
      )

    }
    function JugadoresElement(){
      var { idequipo }= useParams();
      return(
        <Jugadores idequipo={idequipo}/>
      )

    }

    return (
      <BrowserRouter>
        <MenuPrincipal/>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apuestas" element={<Apuestas/>}/>
            <Route path="/equipos/:idequipo" element={<EquiposElement/>}/>
            <Route path="/jugadores/:idequipo" element={<JugadoresElement/>}/>
            
        </Routes>
      </BrowserRouter>
    )
  }
}