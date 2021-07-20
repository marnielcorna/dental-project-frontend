import "./home.css";
import "../../App";  /*IMPORTACION APP-----------???*/
import { Link } from "react-router-dom";
import NavBarFx from "../navbar/navbar";

const Home = () => {
  if(window.localStorage.token === true){
  return (
    <div>
        <NavBarFx></NavBarFx>
        <div className="App-body">
        
            <h1>BIENVENIDO</h1>
            
        </div>
    </div>
  )
}else{
  return(
    <div>
        
        <div className="App-body">
        
            <h1>Hola usuario</h1>
            <Link to="/login" className="App-link">
            Login
            </Link>

            <br></br>
            <Link to="/signup" className="App-link">Sign Up</Link>
        </div>
    </div>
  )
};
};

export default Home;
