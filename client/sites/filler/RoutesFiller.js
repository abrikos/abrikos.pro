import React from "react";
import Home from "client/sites/main/home";
import Contacts from "client/sites/main/contacts";
import Portfolio from "client/sites/main/portfolio";
import HomeFiller from "client/sites/filler/home-filler";

export default function RoutesFiller(props){

    return {
        "/": () => <HomeFiller {...props}/>,
    };
}
