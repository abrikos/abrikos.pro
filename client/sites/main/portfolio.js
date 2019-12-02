import React from 'react';
import {A, useRoutes} from "hookrouter";
import logo from "client/images/logo.png";
export default function Portfolio(props) {

    return <div className={'text-center'}>
        <h1>Портфолио</h1>
        <div><a href={"http://purchases.abrikos.pro/"} target={'_blank'}>Сервис управления списками закупок</a></div>
        <div><a href={"https://svg.abrikos.pro"} target={'_blank'}>Эксперименты с SVG</a></div>
        <div><a href={"https://minesweeper.abrikos.pro"} target={'_blank'}>Классическая игра "Сапер"</a></div>
        <div><a href={"https://minter-earth.pro"} target={'_blank'}>Гео визитки</a></div>
        <div><a href={"https://telegram.me/AbrikosLottery_bot"} target={'_blank'}>Бот крипто лотерей</a></div>
        <div><a href={"http://minter-cities.abrikos.pro/"} target={'_blank'}>Города где живут Минтерианцы</a></div>
    </div>

}


