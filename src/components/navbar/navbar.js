
import React from "react";
import { Link } from "react-router-dom";
import logOutButton from "../logout/logout";
import { useHistory } from "react-router-dom";

const NavBarFx = () => {
  let history = useHistory();
  let redirectOut = () => {
    logOutButton();
    history.push("/login")
  }
  return (
    <div className="navbar">
      <div className="navBar-link-box">
      <Link to={`/private/${window.localStorage.role}`} className="App-link">
        Home
      </Link>
      <Link to="/patients" className="App-link">
        Patients
      </Link>
      <Link to="/appointments" className="App-link">
        Appointments
      </Link>
      <Link to="/logout" className="App-link LogOutButton">Log Out</Link>
      </div>
    </div>
  );
};

export default NavBarFx;
