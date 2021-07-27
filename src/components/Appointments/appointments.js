import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NavBarFx from "../navbar/navbar";

const Appointments = () => {
  let [state, setState] = useState({
    appointment: [],
    loading: true,
  });

  let getAppointments = async () => {
    let responseFromGet = await fetch(
      "http://localhost:4000/user/appointments",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });

    setState({ appointment: responseFromGet, loading: false });
  };
  useEffect(() => {
    getAppointments();
  }, []);

  if (state.loading === true) {
    return <div>cargando..</div>;
  } else if (state.loading === false) {
    return (
      <div className="App-window">
        <div className="App-home-body">
          <NavBarFx></NavBarFx>
          {/*{console.log(state)}*/}
          <div className="body-route">
            <h1 className="titulo">Appointments</h1>
            {/*<Link to="/createappointment">Create a new patient</Link>*/}
            <table className="table table-appointments">
              <tbody className="table-body">
                {state.appointment.map((appointment) => {
                  return (
                    <tr key={appointment._id}>
                      {/* <td>{appointment.patient.name}</td> */}
                      <td>{appointment.dateAppointment}</td>
                      <td>{appointment.hour}</td>
                      <td>{appointment.description}</td>
                      <td>{appointment.treatment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Appointments;
