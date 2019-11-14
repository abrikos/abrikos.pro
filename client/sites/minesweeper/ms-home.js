import React from 'react';
import {A, useRoutes} from "hookrouter";
import logo from "client/images/logo.png";
import Minesweeper from "client/sites/minesweeper/Minesweeper";
export default function MsHome(props) {
    return <div>
        MINE SWEEPER
        <Minesweeper/>
    </div>

}


