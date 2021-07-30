
import { Switch, Route } from "react-router-dom";
import './App.css'

import Administration from "./components/Administration/administration";
import Appointments from "./components/Appointments/appointments"
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Private from "./components/private/private";
import SignUp from "./components/Signup/signup";
import Patients from "./components/Patients/Patients";
import CreateAndUpdate from "./components/createpatient/createandupdate";
import Patient from "./components/Patients/Patient";



const App = () => {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route className="homeRoute"
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />

          <Route className="loginRoute"
            exact
            path="/login"
            render={() => {
              return <Login></Login>;
            }}
          />
          <Route className="signupRoute"
            exact
            path="/signup"
            render={() => {
              return <SignUp></SignUp>;
            }}
          />

          <Route
            exact
            path="/private/:role"
            render={() => {
              return <Private></Private>;
            }}
          />

          <Route
            exact
            path="/patients"
            render={() => {
              return <Patients></Patients>;
            }}
          />
          <Route
            exact
            path="/patient/:patientId"/*REUSAR :patientId*/
            render={() => {
              return <Patient></Patient>;
            }}
            
          />
          <Route
            exact
            path="/createpatient"
            render={() => {
              return <CreateAndUpdate route="create"></CreateAndUpdate>;
            }}
          />
          <Route
            exact
            path="/updatepatient"
            render={() => {
              return <CreateAndUpdate route="update"></CreateAndUpdate>;
            }}
          />
          

          <Route
            exact
            path="/appointments"
            render={() => {
              return <Appointments></Appointments>;
            }}
          />
          <Route
            exact
            path="/home"
            render={() => {
              return <Home></Home>;
            }}
          />
          
          <Route
          exact
          path="/logout"
          render={() => {
            window.localStorage.clear();
            return <Login></Login>;
          }}
        />
        </Switch>
      </div>
    </div>
  );
};

export default App;
