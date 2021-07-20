
import React from "react";
import { Link } from "react-router-dom";
import logOutButton from "../logout/logout";

const NavBarFx = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="App-link">
        Home
      </Link>
      <Link to="/patients" className="App-link">
        Patients
      </Link>
      <Link to="/appointments" className="App-link">
        Appointments
      </Link>
      
      <button className="logOutbut" onClick={logOutButton}>Log Out</button>
    </div>
  );
};

export default NavBarFx;
