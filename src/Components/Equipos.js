import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Equipos extends Component {
    state = {
        equipo: {}, // Solo receibimos un único objeto equipo
        statusGet: false // Todavía no hemos ejecutado el servicio
    }

    loadequipo = () => {
        var url = Global.urlMenuPrincipal + "/api/equipos/" + this.props.idequipo;
        axios.get(url).then(response => {
            this.setState({
                equipo: response.data,
                statusGet: true
            })
        })
    }

    componentDidMount = () => {
        this.loadequipo(); // Realiza la llamada
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idequipo != this.props.idequipo) {
            this.loadequipo();
        }
    }

    render() {
        if (this.state.statusGet == true) {
            return (
                <div>
                    <h1>{this.state.equipo.nombre}</h1>

                    <img src= {this.state.equipo.imagen} style={{width:"200px"}} />

                    <br/>
                    <br/>

                    <p>CHAMPIONS: {this.state.equipo.champions}</p>
                    <p>{this.state.equipo.descripcion}</p>

                
                    <NavLink to={'/jugadores/' + this.state.equipo.idEquipo}  className='btn btn-success'>
                        Jugadores
                    </NavLink> &nbsp;

                    <NavLink to='/' className='btn btn-danger'>
                        Volver
                    </NavLink>


                </div>
            )
        } else {
            return (<p>No tengo nada aún...</p>)
        }
    }
}
