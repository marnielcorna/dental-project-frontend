import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Login from "./components/Login/login";
import PrivateRoute from "./components/Private-route/privateroute";


const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return <Login></Login>;
          }}
        />
        <Route
          exact
          path="/private"
          render={() => {
            return <PrivateRoute></PrivateRoute>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
