import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Buscar from './routes/Buscar.jsx'
import Clientes from './routes/Clientes.jsx'
import ContactDatails from './routes/ContactDatails.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Dashboad from './routes/Dashboad.jsx'
import Pets from './routes/Pets.jsx'
import Vets from './routes/Pets.jsx'
import Ajustes from './routes/Ajustes.jsx'


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Buscar />,
      },
      {
        path: "/clientes",
        element: <Clientes />,
      },
      {
        path: "/contact/:id",
        element: <ContactDatails />,
      },
      {
        path: "/dashboad",
        element: <Dashboad />,
      },
      {
        path: "/pets",
        element: <Pets />,
      },
      {
        path: "/vets",
        element: <Vets />,
      },
      {
        path: "/ajustes",
        element: <Ajustes />,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
