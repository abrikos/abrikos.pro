import React from "react";
import Contacts from "client/sites/main/contacts";
import Table from "client/sites/minesweeper/Table";

export default function RoutesMain(props){
    return {
        "/": () => <Table {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
