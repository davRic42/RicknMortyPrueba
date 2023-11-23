import React, { Component } from 'react';

class Buscar extends Component {
  constructor(props) {
    super(props);

    // Crear una referencia para el input
    this.buscarRef = React.createRef();
  }

  // Función para manejar la presentación del formulario
  getName = (e) => {
    e.preventDefault();
    const name=this.buscarRef.current.value;
    this.props.datosBusqueda(name);
  };

  render() {
    return (
      <form onSubmit={this.getName} className='card text-white bg-success mb-3 mx-auto' style={{ maxWidth: '400px' }} data-bs-theme="light">
  <div className='text-center'>
    <div className='form-group'>
      <input ref={this.buscarRef} type='text' className='form-control' placeholder='Ingrese el nombre del personaje' />
    </div>
    <div className='form-group'>
      <button type="submit" className="btn btn-info">Buscar</button>
    </div>
  </div>
</form>

    );
  }
}

export default Buscar;
