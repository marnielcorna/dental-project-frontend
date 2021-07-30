import React from "react";
import { useParams } from "react-router-dom";
import NavBarFx from "../navbar/navbar";
import Loading from "../loading/loading";

const useEffect = React.useEffect;
const useState = React.useState;

const Patient = () => {
  
  let [state, setState] = useState({
    identification: "",
    name: "",
    lastname: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    city: "",
    postalcode: "",
    appointment: [],
    loading: true,
    auth: false,
  });
  let  id = useParams();
  console.log(id);
  
  let getPatient = async () => {
    let responseFromGet = await fetch(
      `http://localhost:4000/user/patient/${id.patientId}`,
      {
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
      ...state,
      identification: responseFromGet.identification,
      name: responseFromGet.patient.name,
      lastname: responseFromGet.patient.lastname,
      age: responseFromGet.patient.age,
      gender: responseFromGet.patient.gender,
      phone: responseFromGet.patient.phone,
      address: responseFromGet.patient.address,
      city: responseFromGet.patient.city,
      postalcode: responseFromGet.patient.postalcode,
      appointment: responseFromGet.patient.appointment,
      loading: false,
      auth: responseFromGet.auth,
    });
    
  };
  useEffect(  () => {
      getPatient();
  }, []); /*PREGUNTAR A EDU SI EL CORCHETE HACE ALFUN EFECTO AQUI EN POSTEO*/

  if (state.loading === true) {
    return <Loading/>;
  } else if (state.loading === false && state.auth === true ) {
      return (
        <div className="App-window">
          <div className="App-home-body">
            <NavBarFx></NavBarFx>
            <div>
              <h1>RECIBIENDO {state.name}</h1>
            </div>
          </div>
        </div>
      );
    
  }

  // return (
  //   <div>
  //     {console.log(state.phone)}
  //     <h1>RECIBIENDO PACIENTE</h1>
  //   </div>
  // );
};

export default Patient;
