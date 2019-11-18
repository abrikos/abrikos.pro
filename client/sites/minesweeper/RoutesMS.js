import React from "react";
import Contacts from "client/sites/main/contacts";
import Minesweeper from "client/sites/minesweeper/Minesweeper";
import Table from "client/sites/minesweeper/Table";

export default function RoutesMain(props){
    return {
        "/old": () => <Minesweeper {...props}/>,
        "/": () => <Table {...props}/>,
        "/contacts": () => <Contacts {...props}/>
    };
}
