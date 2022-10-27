import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Jugadores extends Component {
    state = {
        jugadores:[], // recibimos un ARRAY DE OBJETOS
        statusGet: false // Todavía no hemos ejecutado el servicio
    }

    loadJugadores = () => {
        var url = Global.urlMenuPrincipal + "api/Jugadores/JugadoresEquipo/" + this.props.idequipo;
        axios.get(url).then(response => {
            this.setState({
                jugadores : response.data,
                statusGet: true
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores(); // Realiza la llamada
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idequipo != this.props.idequipo) {
            this.loadJugadores();
        }
    }
  render() {
    return (
      <div>
        <h1>Jugadores</h1>
        


        </div>
    )
  }
}
