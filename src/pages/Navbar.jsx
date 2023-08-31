import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Grid } from "../assets/icons/grid.svg";
import { ReactComponent as Pets } from "../assets/icons/pet.svg";
import { ReactComponent as Clientes } from "../assets/icons/user.svg";
import { ReactComponent as Vets } from "../assets/icons/user-md.svg";
import { ReactComponent as Ajustes } from "../assets/icons/settings.svg";

const itens = [

  { to: "/",
   name: "Buscar",
    icon: <Search /> },

  { to: "/dashboad",
   name: "Dashboad",
    icon: <Grid /> },

  { to: "/pets",
   name: "Pets",
    icon: <Pets /> },

  { to: "/clientes",
   name: "Clientes",
    icon: <Clientes /> },

  { to: "/vets",
   name: "Vets",
    icon: <Vets /> },

  { to: "/ajustes",
   name: "Ajustes", 
   icon: <Ajustes /> },
];
const Navbar = (props) => {
  return (
    <nav className="navbar">
      {itens.map((item, index) => (
        <div
          className={`aside-components ${
            props.isOpen ? "aside-components:hover" : "aside2-componentes:hover"
          }`}
          key={index}
        >
          <Link to={item.to}>
            {item.icon}
            {props.isOpen && <h1>{item.name}</h1>}
          </Link>
        </div>
      ))}
    </nav>
  );
};
export default Navbar;
