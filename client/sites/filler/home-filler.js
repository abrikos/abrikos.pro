import React, {useReducer} from 'react';
import "./filler.sass"
import filler from "./Filler"

const Filler = new filler()


const style = {
    border: '1px solid black',
};


export default function HomeFiller(props) {
    //const [cells, setCells] = useState(Filler.cells);
    const [cells, dispatch] = useReducer(reducer, Filler.cells);

    function mouseOut(e) {
        for (const c of cells) {
            delete c.hover;
            dispatch(c)
        }

    }

    function mouseOver(e) {
        const cell = cells[e.target.getAttribute('index')];
        crawler(cell)
        //setCells(newCells)
    }

    function crawler(cell) {
        const coordinates = [[-1, 0], [0, -1], [0, 1], [1, 0]];
        for (const xy of coordinates) {
            const test = cells.find(c => c.row === cell.row + xy[0] && c.col === cell.col + xy[1]);
            if (!test || test.hover) continue;
            if (cell.fill === test.fill) {
                test.hover = 1;
                dispatch(test)
                crawler(test)
                //cells[test.index].hover = 1
            }
        }
    }

    return <div>
        Filler
        <svg
            id={'filler-field'}
            viewBox={Filler.viewBox}
            style={style}
        >
            <g transform={Filler.transform}>
                {cells.map(c => <rect key={c.index} onMouseOver={mouseOver} onMouseOut={mouseOut} fillOpacity={c.hover ? .5 : 1}  {...c}/>)}
            </g>
        </svg>
    </div>
}

function reducer(state, action) {
    const cls = [];
    for(const c of state){
        cls.push(c.index===action.index ? action : c)
    }
    return cls;

}


