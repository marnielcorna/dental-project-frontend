import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NavBarFx from "../navbar/navbar";

const Patients = () => {
  let [state, setState] = useState({ patients: [], loading: true });
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

    setState({ patients: responseFromGet, loading: false });
  };
  useEffect(() => {
    getPatients();
  }, []);

  if (state.loading === true) {
    return <div>cargando..</div>;
  } else if (state.loading === false) {
    return (
      <div>
        {console.log(state)}
        <NavBarFx></NavBarFx>
        <h1>Patients</h1>
        <table>
          <tbody>
            {state.patients.map((patient) => {
              return (
                <tr key={patient._id}>
                  <td>{patient.name}</td>
                  <td>{patient.lastname}</td>
                  <td>{patient.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Patients;
