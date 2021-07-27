// import "../../App"; /*IMPORTACION APP-----------???*/
import { Link } from "react-router-dom";
import NavBarFx from "../navbar/navbar";

const Home = () => {
  return (
    <div className="App-window">
      <div className="App-home-body">
        <div className="home-log-sign">
          <h1>Welcome to Dental Clinic</h1>
          <p>please login first or create a new user.</p>
          <Link to="/login" className="App-link">
            Login
          </Link>

          <br></br>
          <Link to="/signup" className="App-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
