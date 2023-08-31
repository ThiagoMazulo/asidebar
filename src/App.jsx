import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Logout from "./routes/Logout";
import Menu from "./Menu";
import "./index.css";
import { ReactComponent as Toogle } from "./assets/icons/menu.svg";
import { ReactComponent as Simbolo } from "./assets/icons/Group 5.svg";
import { ReactComponent as Text } from "./assets/icons/Vet..svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <aside className="container">
      <div className={`App ${isOpen ? "App2" : ""}`}>
        <div className="toogle-nav">
          <nav style={{ display: isOpen ? "block" : "none" }} className="nav">
            <Simbolo />
            <Text />
          </nav>
          <div className="toogle">
            <Toogle onClick={toogle} />
          </div>
        </div>
        <Menu />
        <Navbar isOpen={isOpen} />
        <Logout isOpen={isOpen} />
      </div>
      <Outlet />
    </aside>
  );
}

export default App;
