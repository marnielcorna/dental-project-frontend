import React from "react";
import { useParams } from "react-router-dom";

import NavBarFx from "../navbar/navbar";/**/

import { Link } from "react-router-dom";/**/


const useEffect = React.useEffect;
const useState = React.useState;

const Private = () => {
  const { role } = useParams();
  
  let [state, setState] = useState({
    username: "",
    name:"",
    role: role /*aqui se declaran */,
  });

  let url = "";
  if(state.role === "user"){
    url="http://localhost:4000/user/home"
  } else if(state.role==="administrator"){
    url="http://localhost:4000/admin/home"
  }


  let getUser = async () => {
    let responseFromGet = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    console.log(responseFromGet);
    console.log(responseFromGet.name);
    setState({
      username: responseFromGet.username,
      name: responseFromGet.name,
      role: responseFromGet.role /*aqui se actualizan*/,
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  if (state.username === "") {
    return <div>loading...</div>;
  } else if (state.role === "user") {
    return (
      <div>
        <NavBarFx></NavBarFx>
        <div className="App-body">
        <h1>Dental Clinic</h1>
        <p>Welcome to your home {state.name}</p>
        <Link to="/patients">link patients</Link>
        <Link to="/appointments">link appointments</Link>
        </div>
      </div>
    );
  } else if (state.role === "administrator") {
    return (
      <div>
        <NavBarFx></NavBarFx>
        Dental Clinic
        <p>Welcome to your home {state.name}</p>
      </div>
    );
  }
};
export default Private;
