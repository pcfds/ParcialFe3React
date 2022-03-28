// creo los botones 
import React, { Component } from 'react';

export default class Botones extends Component {
    render(){
        const {opcionA, opcionB, handleClick} = this.props;
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id= "A" className="botones" onlicks={handleClick}>A</button>
                    <h2>{opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id= "B" className="botones" onlicks={handleClick}>B</button>
                    <h2>{opcionB}</h2>
                </div>
            
            </div>
        )
    }
}