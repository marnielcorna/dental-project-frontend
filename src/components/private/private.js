import React from "react";
import { useParams } from "react-router-dom";
import NavBarFx from "../navbar/navbar"; /**/
import { Link } from "react-router-dom"; /**/

const useEffect = React.useEffect;
const useState = React.useState;

const Private = () => {
  const { role } = useParams();

  let [state, setState] = useState({
    username: "",
    name: "",
    role: role /*aqui se declaran */,
    auth: false,
    loaded: false,
  });

  let url = "";
  if (state.role === "user") {
    url = "http://localhost:4000/user/home";
  } else if (state.role === "administrator") {
    console.log("ruta??");
    url = "http://localhost:4000/admin/home";
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
    if (responseFromGet.auth === true) {
      setState({
        username: responseFromGet.user.username,
        name: responseFromGet.user.name,
        role: responseFromGet.user.role /*aqui se actualizan*/,
        auth: true,
        loaded: true,
      });
    } else if (responseFromGet.auth === false) {
      setState({
        ...state,
        loaded: true,
      });
    }
    window.localStorage.setItem("role", responseFromGet.user.role)
  };
  useEffect(() => {
    getUser();
  }, []);
  if (state.loaded === false) {
    return (
      <div className="App-home-body">
        <div>loading...</div>
      </div>
    );
  } else if (state.loaded === true) {
    if (state.auth === true) {
      if (state.role === "user") {
        return (
          <div className="App-window">
            <div className="App-home-body">
              <NavBarFx></NavBarFx>
              <div className="bienvenida-private">
                <h1>Dental Clinic</h1>
                <p>Welcome {state.name} take a look to your:</p>
                <br></br>
                <Link to="/patients">Patients</Link>
                <br></br>
                <Link to="/appointments">Appointments</Link>
              </div>
            </div>
          </div>
        );
      } else if (state.role === "administrator") {
        return (
          <div className="App-window">
            {console.log("recibiendo admin?")}
            <div className="App-home-body">
              <NavBarFx></NavBarFx>
              <div className="bienvenida-private">
                <h1>Dental Clinic</h1>
                <p>Welcome to your home {state.name}</p>
              </div>
            </div>
          </div>
        );
      }
    } else if (state.auth === false) {
      return (
        <div className="App-window">
          <div className="App-home-body">
            <div className="bienvenida-private">
            <h1>No estas Autenticado</h1>
            </div>
          </div>
        </div>
      );
    }
  }
};
export default Private;
