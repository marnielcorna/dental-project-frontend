import "../../App.css";

import { Link } from "react-router-dom";
const Users = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="App-link">Home</Link>
        <Link to="/private/:role/users" className="App-link">Users</Link>
        <Link to="/private/:role/patients" className="App-link">Patients</Link>
        <Link to="/private/:role/appointments" className="App-link">Appointments</Link>
        <Link to="/private/:role/administration" className="App-link">administration</Link>
        <Link to="/login" className="App-link">Login</Link>

      </div>
      <div className="user-container">
        <h1>Users</h1>
      </div>
    </div>
  );
};

export default Users;
