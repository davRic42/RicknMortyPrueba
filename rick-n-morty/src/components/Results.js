import React, { Component } from 'react';
import Photo from './Photos';

class Results extends Component {
  showDetails = () => {
    const detallesPersonajes = this.props.detallesPersonajes;

    if (!detallesPersonajes || detallesPersonajes.length === 0) return null;

    console.log(detallesPersonajes);
    return (
      <React.Fragment>
        <div className='card border-success mb-4 p-5'>
          <div className='card-body'>
            {detallesPersonajes.map((detalle, index) => (
              <div key={index} className="mb-4">
                <h3>{detalle.nombre}</h3>
                <p>Status: {detalle.status}</p>
                <p>Especie: {detalle.especie}</p>
                <p>Género: {detalle.genero}</p>
                <Photo imagen={detalle.imagen} />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h2>Resultados:</h2>
        {this.showDetails()}
      </React.Fragment>
    );
  }
}

export default Results;
