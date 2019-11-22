import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faCheck, faCrosshairs, faPlus, faSearchMinus, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {Popover, PopoverBody} from "reactstrap";
import {t} from "client/Translator";

const widthView = 1700;
const heightView = 1200;
const cellWidth = 50;
const style = {
    border: '1px solid black',
};
const viewBox = [(widthView) / -2, (heightView) / -2, widthView, heightView];
const cells = [
    {x: 1, y: 2},
    {x: 1, y: 3},
    {x: 1, y: 4},
]

export default function HomeSvg(props) {
    const [scale, setScale] = useState();
    const [shift, setShift] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [cellOver, setCellOver] = useState(1);

    function mapClick() {

    }

    function getSizes(c) {
        return {x: c.x * cellWidth - cellWidth / 2, y: c.y * cellWidth - cellWidth / 2, width: cellWidth, height: cellWidth}
    }

    function cellClick(e, cell) {
        e.stopPropagation();
        setCellOver(cell)
    }

    function handlePan(x, y) {
        setShift({x: x * 1.6, y: y * 1.6})
    }

    function handleZoom (delta) {
        if (delta > 0) {
            setZoom( zoom * 1.1);
        } else {
            setZoom( zoom / 1.1);
        }
    }

    function getId({x, y}) {
        return `cell-${x}-${y}`
    };

    return <svg
        viewBox={viewBox}
        style={style}
        onClick={mapClick}
        id={'svg-map'}
        //onMouseMove={console.log}
    >
        <g transform={`translate(${shift.x} ${shift.y}) scale(${zoom})`}>
            {/*<path d="M 120 201 V 80 H 50" stroke="black" strokeWidth="2" fill="transparent"/>*/}

            {/*<circle cx={0} cy={0} r={5} style={{cursor: 'pointer'}}/>*/}
            {/*{cells.map(c => <circle key={c.id} cx={c.x} cy={c.y} r={1} fill={c.color}/>)}*/}
            {/*<rect x={0} y={0} width={100} height={100}/>*/}

            {cells.map(c =>
                <rect key={c.id} fill={c.color} {...getSizes(c)} onClick={e => cellClick(e, c)} className={c.payed ? 'payed' : 'not-payed'} stroke={cellOver === c ? '#ff0000' : c.isCenter ? 'green' : '#333333'} id={getId(c)}/>
            )}

        </g>
        <line x1={0} y1={-cellWidth} x2={0} y2={cellWidth} stroke={'red'}/>
        <line x1={-cellWidth} y1={0} x2={cellWidth} y2={0} stroke={'red'}/>

        <g transform={`translate(750 -600)`}>
            <SvgButton icon={faSearchPlus} color={'green'} onClick={e => handleZoom(+1)}/>
            <SvgButton icon={faSearchMinus} transform={'translate(0, 110)'} color={'red'} onClick={e => handleZoom(-1)}/>

        </g>


        <SvgButton icon={faArrowLeft} transform={'translate(-850, -50)'} color={'white'} onMouseDown={e => handlePan(-100, 0)}/>
        <SvgButton icon={faArrowUp} transform={'translate(-50, -600)'} color={'white'} onMouseDown={e => handlePan(0, -100)}/>
        <SvgButton icon={faArrowRight} transform={'translate(750, -50)'} color={'white'} onMouseDown={e => handlePan(100, 0)}/>
        <SvgButton icon={faArrowDown} transform={'translate(-50, 500)'} color={'white'} onMouseDown={e => handlePan(0, 100)}/>

    </svg>
}

function SvgButton(props) {

    return <g onClick={props.onClick} onMouseDown={props.onMouseDown} transform={props.transform} className={'button'}>
        <rect x={0} y={0} width={100} height={100} fillOpacity={0.9} rx={10} ry={10} fill={'#444'}/>
        <g transform={'translate(5 15) scale(0.05)'} fillOpacity={0.3}>
            <FontAwesomeIcon icon={props.icon} color={props.color}/>
        </g>
    </g>

}
