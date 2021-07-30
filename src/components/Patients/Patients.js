import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NavBarFx from "../navbar/navbar";
import { useHistory } from "react-router-dom";
import Loading from "../loading/loading";

const Patients = () => {
  let [state, setState] = useState({
    patients: [],
    loading: true,
    auth: false,
    
  });
  let history = useHistory();
  let viewPatient = () =>{
    
    history.push("/patient")
  }
  let getPatients = async () => {
    let responseFromGet = await fetch("http://localhost:4000/user/patients", {
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

    setState({
      patients: responseFromGet.patients,
      loading: false,
      auth: responseFromGet.auth,
    });
    
  };
  useEffect(() => {
    getPatients();
  }, []);
  if (state.loading === true) {
    return <Loading/>;
  } else if (state.loading === false) {
    if (state.auth === true) {
      return (
        <div className="App-window">
          <div className="App-home-body">
            <NavBarFx></NavBarFx>
            <div className="body-route">
              <h1 className="titulo">Patients</h1>
              <Link to="/createpatient">Create a new patient</Link>
              <table className="table table-patients">
                <tbody className="table-body">
                  {state.patients.map((patient) => {
                   
                    return (
                      <tr key={patient._id}>
                        {/* <Link to={`/patient/${patient.identification}`}*/}
                          <td>{patient.name}</td>
                          <td>{patient.lastname}</td>
                          <td><Link to={`/patient/${patient._id}`}> Detail</Link></td>
                          {console.log(patient._id)}
                        {/*</Link>*/}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App-window">
          <div className="App-home-body">
            <div className="bienvenida-private">
              <h1>No estas Autenticado</h1>
              <Link to="/login">Log in here</Link>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Patients;
