import React, {Component} from 'react';
const historial = [];

export default class Diseño extends Component {

    constructor(props) {
        super(props);
        this.state={
            contador : 0,
            seleccionAnterior: ""
        };
    }

    componentDidUpdate(){
        alert("El componente se actualizó")
    }
    render() {
        return (
            <>

            </>
        )
    }
}