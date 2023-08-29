import React from 'react'
import { Link } from 'react-router-dom';

const Clientes = () => {
  return (
    <div>
        <h1>página de contato</h1>
        <Link to="/cliente/1">Forma de contato 1</Link>

        <Link to="/cliente/2">Forma de contato 2</Link>

        <Link to="/cliente/3">Forma de contato 3</Link>
    </div>
  )
}

export default Clientes;