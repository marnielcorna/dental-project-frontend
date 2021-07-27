import React from "react";
import { useHistory } from "react-router-dom";

const useState = React.useState;

const Login = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    message: "",
  });
  let history = useHistory();

  let liveForm = async (event) => {
    event.preventDefault();
    let response = await loginPost();
    console.log(response);
    if (response.auth === true) {
      saveToken(response.token);
      redirect(response.role);
    } else {
      setState(
        {message: response.message}
      )
    }
  };
  /*funcion para actualizar estado*/
  let updateState = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  /*funcion para guardar token*/

  let saveToken = (token) => {
    window.localStorage.setItem("token", token);
  };
  /* funcion redireccionar*/

  let redirect = (role) => {
    history.push(`/private/${role}`);
  };

  /*funcion login || No se toca */

  let loginPost = async () => {
    let responseFromPost = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.username,
        password: state.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return responseFromPost;
  };

  return (
    <div className="App-window">
      <div className="App-home-body">
        <div className="login-log-sign">
          <form onSubmit={liveForm}>
            <label>
              Username:
              <input
                type="text"
                onChange={updateState}
                name="username"
                placeholder="username"
              />
            </label>
            <br></br>
            <label>
              Password:
              <input
                type="text"
                onChange={updateState}
                name="password"
                placeholder="password"
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" className="loginbutton" />{" "}
            <div>
              <p>{state.message}</p>
            </div>
            {/*BOTON*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
