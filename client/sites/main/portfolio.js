import React from 'react';

export default function Portfolio(props) {

    const sites = [
        {url: 'https://www.beru14.ru', description: 'Сайт бесплатных объявлений'},
        {url: 'http://iltumen.ru/', description: 'Государственное собрание (ИЛ ТУМЭН) РС(Я)'},
        {url: 'http://sakhaenergo.ru/', description: 'АО «Сахаэнерго»(ОАО «Сахаэнерго»)'},
        {url: 'https://kadry.sakha.gov.ru/', description: 'Кадровый портал РС(Я)'},
        {url: 'https://asrsya.ru/', description: 'Академия Наук РС(Я)'},
        {url: 'https://math.asrsya.ru/', description: 'Научно−исследовательский семинар "Неклассические задачи математической физики"'},
        {url: 'https://schools.asrsya.ru/', description: 'Сеть школ первого Президента Республики Саха (Якутия) М.Е. Николаева'},
    ]
    return <div className={'text-center'}>
        <h1>Портфолио</h1>
        {sites.map((s,i)=><div key={i}><a href={s.url} target={'_blank'}>{s.description}</a></div>)}


        {/*<div><a href={"http://purchases.abrikos.pro/"} target={'_blank'}>Сервис управления списками закупок</a></div>*/}
        {/*<div><a href={"https://svg.abrikos.pro"} target={'_blank'}>Эксперименты с SVG</a></div>*/}
        {/*<div><a href={"https://minesweeper.abrikos.pro"} target={'_blank'}>Классическая игра "Сапер"</a></div>
        <div><a href={"https://minter-earth.com"} target={'_blank'}>Гео визитки</a></div>
        <div><a href={"https://telegram.me/AbrikosLottery_bot"} target={'_blank'}>Бот крипто лотерей</a></div>
        <div><a href={"http://minter-cities.abrikos.pro/"} target={'_blank'}>Города где живут Минтерианцы</a></div>*/}
    </div>

}


