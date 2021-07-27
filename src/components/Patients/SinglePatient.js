import React from "react";
import { useHistory } from "react-router-dom";

const Patient = () => {
  const statePatient = () => {
    let [state, setState] = useState({
    identification: "", 
     /*  name: "",
      lastname: "",
      age: "",
      gender: "",
      phone: "",
      address: "",
      city: "",
      postalcode: "",
      auth: false,
      loading: false,  */
    });


    let getPatient = async () => {
      let responseFromGet = await fetch(
        "http://localhost:4000/user/patient/:patientId",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: window.localStorage.token,
          },
          body: JSON.stringify({
            identification: state.id,
            /*name: state.name,
            lastname: state.lastname,
            age: state.age,
            gender: state.gender,
            phone: state.phone,
            address: state.address,
            city: state.city,
            postalcode: state.postalcode,*/
          }),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          return result;
        });

      setState({ appointment: responseFromGet, loading: false });
    };
  };
};

export default Patient;
