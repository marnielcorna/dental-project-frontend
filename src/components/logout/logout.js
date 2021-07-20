import React from "react";
import { Redirect } from "react-router";
// import {useHistory} from "react-router-dom";

let logOutButton = () => {
    // let history = useHistory();
    console.log(window.localStorage.token)
    window.localStorage.clear();
    console.log(window.localStorage.token)
    
    // let saliendo = () => {
    //     history.push('/login');
    // }


}
export default logOutButton;