import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const ContactDatails = () => {
    const { id } = useParams();

    // usenavigate - navegação entre paginas
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("contato enviado!")
        return navigate("/")
    }
  return (
    <div>
        <h1>Exibindo mais informações do contato: {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDatails;