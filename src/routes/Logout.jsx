import React from "react";
import avatar from "../assets/img/avatar.png";
import { ReactComponent as Outlogin } from "../assets/icons/log-out.svg";
const Logout = (props) => {
  return (
    <footer className="log-out">
      {props.isOpen && (
        <div style={{ display: "flex" }}>
          <img src={avatar} alt="profissional" />
          <div className="name-prof">
            <h3>Eleanor Pena</h3>
            <h4>Veterinária</h4>
          </div>
        </div>
      )}
      <button className="out-login">
        <Outlogin />
      </button>
    </footer>
  );
};

export default Logout;
