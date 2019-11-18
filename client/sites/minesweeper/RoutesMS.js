import React from "react";
import Contacts from "client/sites/main/contacts";
import Minesweeper from "client/sites/minesweeper/Minesweeper";

export default function RoutesMain(props){
    return {
        "/": () => <Minesweeper {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
