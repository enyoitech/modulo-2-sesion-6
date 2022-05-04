import React from 'react'
import PropTypes from 'prop-types';
import './body.css';

export const Body = (props) => {
   
  return (
    <div className='bg-danger border-body' >hola mi Nombre es: {props.name} {props.apellido}</div>
  )
}

Body.defaultProps = {
    name: 'juanito',
    apellido: 'ramirez'
  };


  Body.propTypes = {
    name: PropTypes.string,
    apellido: PropTypes.string,
    cel: PropTypes.number,
    data: PropTypes.object,
    metodo: PropTypes.func
}