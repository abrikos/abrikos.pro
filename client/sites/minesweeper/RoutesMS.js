import React from "react";
import Home from "client/sites/main/home";
import Contacts from "client/sites/main/contacts";
import MsHome from "client/sites/minesweeper/ms-home";

export default function RoutesMain(props){
    return {
        "/": () => <MsHome {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
