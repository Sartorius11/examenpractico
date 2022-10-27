import React, { Component } from 'react';
import logo from './../assetss/images/logo.png'


import Global from '../Global';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';

export default class MenuPrincipal extends Component {

    state = {
        departamentos: [],
        status: false
    }

    loadMenuPrincipal = () => {
        var request = "/api/Equipos";
        var url = Global.urlMenuPrincipal + request;
        axios.get(url).then(response => {
            this.setState({
                menuprincipal: response.data,
                status: true
            });
        });
        
    }
    componentDidMount = () => {
        this.loadMenuPrincipal();
    }



    render() {
        return (


            <nav className="navbar navbar-expand-lg bg-light">

                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="/">CHAMPIONS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    
                                    {
                                        this.state.status == true &&
                                        this.state.menuprincipal.map((equipos, index) => {
                                            return (<li key={equipos.idEquipo}>
                                                <NavLink to={"/equipos/" + equipos.idEquipo}
                                                    className="dropdown-item">
                                                    {equipos.nombre}
                                                </NavLink>
                                            </li>);
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </nav>

                                
           



        )
    }
}
