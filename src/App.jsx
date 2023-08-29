import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Logout from './routes/Logout';
import "./index.css";

function App() {
  return (
    <aside className="container">
      <div className="App">
        <Navbar />
        <Logout />
      </div>
      <Outlet />
    </aside>
  );
}

export default App;


