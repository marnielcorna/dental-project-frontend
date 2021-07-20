import React from "react";
import { useHistory } from "react-router-dom";


const Signup =  () => {
    let history = useHistory();
    let liveForm = async (event) => {
        event.preventDefault();
    await initial();
    redirect();
    let initial = async () =>{
    let responseFromPost =  await fetch("http://localhost:4000/signup", {
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
  let redirect = (role) => {
    history.push(`/private/${role}`);
  };
  

  return (
    <div className="signup-box">
      <form onSubmit={liveForm}>
        <label>
          User:
          <input
            type="text"
            name="username"
            placeholder="username"
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="password"
          />
        </label>
        <br></br>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="role"
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
}

export default Signup;
