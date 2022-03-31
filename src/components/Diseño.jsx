import React, { Component } from "react";
import Historia from "./Historia";
import Botones from "./Botones";
import Historial from "./Historial";
import data from "./data.json";
import swal from "sweetalert2";

const historial = [];

export default class Diseño extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionAnterior: "",
    };
  }

  componentDidMount() {
    swal.fire({
      title: '¡Bienvenido Intruso!',
      text: 'Comienza tu viaje, elige bien tu destino.',
      imageUrl: 'https://scontent.faep9-3.fna.fbcdn.net/v/t31.18172-8/12901426_987769684648938_5883829831405943316_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=973b4a&_nc_ohc=8KMLod3_zg8AX-48xK4&_nc_ht=scontent.faep9-3.fna&oh=00_AT_fHrrLdeA-2t4Ewheuq2S1Wsw0ZIhwTemrog-SwCdQTg&oe=626BF534',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  componentDidUpdate(estadoPrevio) {
    if (estadoPrevio.contador !== this.state.contador) {
      historial.push(this.state.seleccionAnterior);
    }
  }

  handleClick = (element) => {
    const id = element.target.id;
    const contador = this.state.contador;
    const anterior = this.state.seleccionAnterior;

    if (contador >= 7) {
      swal.fire({
        title: 'Quieres repetir la historia?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Repetir",
        denyButtonText: "Finalizar",
      }).then((result) => {
        if (result.isConfirmed) {
           window.location.reload();
        } else if (result.isDenied) {
          swal.fire('Se ha finalizado la historia', '', 'info')
        }
      })
    } else if (id === "A" && anterior !== "A") {
      this.setState({
        contador: contador + 1,
        seleccionAnterior: "A",
      });
    } else if (id === "A" && anterior === "A") {
      this.setState({
        contador: contador + 2,
        seleccionAnterior: "A",
      });
    } else if (id === "B" && anterior ===  "A") {
      this.setState({
        contador: contador + 3,
        seleccionAnterior: "B",
      });
    } else if (id === "B" && anterior !== "A") {
      this.setState({
        contador: contador + 2,
        seleccionAnterior: "B",
      });
    }
    console.log(historial);
    console.log(contador);
  };

  render() {
    return (
      <>
        <Historia contador={[this.state.contador]} />
        <Botones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historial={historial.map(
            (historial, i) => (
              <li key={i}>{historial}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </>
    );
  }
}
