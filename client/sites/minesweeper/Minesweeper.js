import React, {useEffect, useRef, useState} from 'react';
import Config from './config'
import Field from './Field';
import {Button, ButtonGroup} from 'reactstrap';
import './minesweeper.css'
import {t, changeLanguage} from "client/Translator";
import * as Images from "./images"
import cellBgImages from 'client/sites/minesweeper/images/cellBgImages'

export default function Minesweeper(props) {
    const [level, setLevel] = useState(0);
    const [field, setField] = useState(new Field(level));
    const [smileImage, setSmile] = useState('Norm');
    const [timerOn, toggleTimer] = useState(false);
    const [minesLeft, setMinesLeft] = useState(field.minesLeft());
    const [seconds, setSeconds] = useState(0)


    const levels = Config.levels;


    function handleContextMenu(event) {
        let obj = event.path[0];
        event.preventDefault();

        if (!obj.className.match('cell')) return;
        if (field.isFinished()) return;
        let coordinate = {row: event.path[0].getAttribute('row') * 1, col: event.path[0].getAttribute('col') * 1};
        console.log(field.minesLeft())
        field.setFlag(coordinate);
        setMinesLeft(field.minesLeft())
    }

    function chooseLevel(val) {
        setSeconds(0)
        toggleTimer(false);
        setLevel(val);
        setField(new Field(val))
    };

    function cellId(cell) {
        return `col-${cell.col}-${cell.row}`;
    }

    function cellPush(event, cell) {

        if (event.button) return
        if (field.status !== 'play') return;
        cell.pressed = true;
        setSmile('Wow');

    }

    function click(event, cell) {
        if (event.button) return
        cell.pressed = false;
        field.click(cell);
        switch (field.status) {
            case 'win':
                setSmile('Win');
                toggleTimer(false);
                break;

            case 'gameover':
                setSmile('Death');
                toggleTimer(false)
                break;
            case 'play':
                if (!timerOn) toggleTimer(true);
                setSmile('Norm');
        }
        //setField(field)
        //setMinesLeft(field.minesLeft())
        //this.setState({field:this.field})
    }

    useEffect(() => {
        //document.addEventListener('contextmenu', handleContextMenu);
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!timerOn && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn, seconds]);

    function drawCell(cell) {
        return <td
            key={cellId(cell)}
            onMouseUp={e => click(e, cell)}
            onMouseDown={e => cellPush(e, cell)}
            className={'cell ' + cell.getClass()}
            style={{
                backgroundImage: `url(${cellBgImages[cell.getImage()]})`
            }}
            row={cell.row}
            col={cell.col}
            children={cell.text}
        >{cell.getClass()} {cell.mines}</td>
    }

    function drawRows() {
        let rows = [];
        let cols = [];
        let r = 0;
        for (let cell of field.cells) {
            let row = Math.floor(cell.i / field.level.cols);
            if (row !== r) {
                r = row;
                rows.push(<tr key={row} children={cols}/>);
                cols = []
            }
            cols.push(drawCell(cell));
        }
        rows.push(<tr key={r + 1} children={cols}/>);
        return rows;
    }


    return (

        <div className="admin-profile text-center">

            <div>
                <ButtonGroup>
                    <Button onClick={() => chooseLevel(0)} color='primary'>{t('Level')} 1</Button>
                    <Button onClick={() => chooseLevel(1)} color='secondary'>{t('Level')} 2</Button>
                    <Button onClick={() => chooseLevel(2)} color='warning'>{t('Level')} 3</Button>
                </ButtonGroup>
            </div>
            <table border="1" className='minesweeper m-auto'>
                <tbody>
                <tr>
                    <td>
                        <table width="100%" border="1">
                            <tbody>
                            <tr>
                                <td width="40%" className='digital'>{seconds}</td>
                                <td className='text-center'>
                                    <img
                                        src={Images[`smile${smileImage}`]}
                                        onClick={() => setLevel(level)}
                                        onMouseDown={() => setSmile('Wow')}
                                        onMouseUp={() => {
                                            chooseLevel(level);
                                            setSmile('Norm')
                                        }}
                                    />
                                </td>
                                <td width="40%" className='digital'>{minesLeft}</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table className="board">
                            <tbody>{drawRows()}</tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );

}

