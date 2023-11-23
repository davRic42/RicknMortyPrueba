import React from 'react';

const Photo = ({ imagen }) => {
  return (
    <div className='card text-white bg-secondary mb-3' style={{ width: '500px', height: '400px', borderRadius: '20px' }}>
    <img className='img-fluid mx-auto my-auto' src={imagen} alt="Imagen" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
  </div>
  

  );
}

export default Photo;
