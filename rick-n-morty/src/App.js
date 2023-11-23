import React, { Component } from 'react';
import Buscar from './components/Buscar';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);

    // Estado para almacenar el valor de búsqueda y los detalles de los personajes de la API
    this.state = {
      valorBusqueda: '',
      detallesPersonajes: [],
    };
  }

  consultaApi = () => {
    const nameapi = this.state.valorBusqueda;
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${nameapi}`;

    fetch(apiUrl)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        if (resultado.results.length > 0) {
          const detallesPersonajes = resultado.results.map(personaje => ({
            nombre: personaje.name,
            status: personaje.status,
            especie: personaje.species,
            genero: personaje.gender,
            imagen: personaje.image, // Agregar la URL de la imagen
          }));

          this.setState({ detallesPersonajes });
        } else {
          console.log('No se encontraron resultados.');
        }
      })
      .catch(error => console.error('Error al consultar la API:', error));
  };

  // Función para manejar los datos de búsqueda
  datosBusqueda = (nombre) => {
    this.setState({ valorBusqueda: nombre }, () => {
      // Llamada a la API después de actualizar el estado
      this.consultaApi();
    });
  };

  render() {
    return (
      <div className="app container">
        <div className='jumbotron'>
          <h1 className='text-success'>Rick N' Morty</h1>
        </div>

        <Buscar datosBusqueda={this.datosBusqueda}></Buscar>

        <p id="buscar">Valor de búsqueda: {this.state.valorBusqueda}</p>

        <Results detallesPersonajes={this.state.detallesPersonajes}></Results>
      </div>
    );
  }
}

export default App;
