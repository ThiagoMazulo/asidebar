import React from "react";
import avatar from "../assets/img/avatar.png";

const Logout = () => {
  return (
    <footer>
      <div className="log-out">
        <img src={avatar} alt="" />
        <div className="name-prof">
          <h3>Eleanor Pena</h3>
          <h4>Veterinária</h4>
        </div>
      </div>
    </footer>
  );
};

export default Logout;
