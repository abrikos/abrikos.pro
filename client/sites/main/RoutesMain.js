import React from "react";
import Home from "client/sites/main/home";
import Contacts from "client/sites/main/contacts";
import Portfolio from "client/sites/main/portfolio";

export default function RoutesMain(props){

    return {
        "/": () => <Home {...props}/>,
        "/portfolio": () => <Portfolio {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
