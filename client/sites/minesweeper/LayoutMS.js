import React from 'react';
import TopMenu from "client/components/TopMenu";
import 'bootstrap/dist/css/bootstrap.css';
import {Alert} from "reactstrap";
import {A, useRoutes} from "hookrouter";
import routes from "./RoutesMS";
import {t} from "client/Translator";


export default function LayoutMain(props) {
    const routeResult = useRoutes(routes(props));
    let {children, alert, ...rest} = props;
    const menuItems = [
        {label: t('Home'), path: '/'},
        {label: t('Contacts'), path: '/contacts'},
        /*{label: 'DropDown', items:[
                {label:'AAAAAAaa', path:'/contacts'},
                {label:'BBBB', path:'/about'},
            ]},*/
    ];

    return <div className={'content minesweeper'}>
        <TopMenu {...rest} items={menuItems} title={'Minesweeper'}/>
        <div className={'container'}>
            <Alert {...alert}/>
            {routeResult}
        </div>
        <footer>
            Footer
        </footer>
    </div>

}


