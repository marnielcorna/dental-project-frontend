import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import NavBarFx from "../navbar/navbar";

const CreateAndUpdate = (props) => {
  let [state, setState] = useState({
    name: "",
    lastname: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    city: "",
    postalcode: "",
    loading: true,
    route: props.route,
    url: "",
  });
  let ifCreateAndUpdate = () => {
    if (state.route === "create") {
      setState({
        ...state,
        url: "http://localhost:4000/user/newpatient",
      });
    } else if (state.route === "update") {
      setState({
        ...state,
        url: "http://localhost:4000/user/updatepatient/:patientId" /*PENDIENTE COMPLETAR*/,
      });
    }
  };
  useEffect(() => {
    ifCreateAndUpdate();
  }, []);

  let handleOnChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  let onSubmit = async (event) => {
    event.preventDefault();
    let responseFromPost = await fetch(state.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
      body: JSON.stringify({
        name: state.name,
        lastname: state.lastname,
        age: state.age,
        gender: state.gender,
        phone: state.phone,
        address: state.address,
        city: state.city,
        postalcode: state.postalcode,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
      console.log(responseFromPost)
  };

  return (
    <div>
      <h1>Recibiendo</h1>
      {console.log(state)}
      <form onSubmit={onSubmit} className="create-form">
        <label>
          Name:
          <input
            type="text"
            onChange={handleOnChange}
            name="name"
            placeholder="name"
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            onChange={handleOnChange}
            name="lastname"
            placeholder="Lastname"
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            onChange={handleOnChange}
            name="age"
            placeholder="Age"
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            onChange={handleOnChange}
            name="gender"
            placeholder="gender"
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            onChange={handleOnChange}
            name="phone"
            placeholder="Phone"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            onChange={handleOnChange}
            name="address"
            placeholder="address"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            onChange={handleOnChange}
            name="city"
            placeholder="city"
          />
        </label>
        <label>
          Postalcode:
          <input
            type="text"
            onChange=""
            name="postalcode"
            placeholder="postalcode"
          />
        </label>
        <input type="submit" value="Submit" className="loginbutton" />
        <div>
          <p>{state.message}</p>
        </div>
      </form>
    </div>
  );
};

export default CreateAndUpdate;
