import React from "react";
import Contacts from "client/sites/main/contacts";
import Table from "client/sites/minesweeper/Table";
import HomeSvg from "client/sites/svg/home-svg";

export default function RoutesSvg(props){
    return {
        "/": () => <HomeSvg {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
