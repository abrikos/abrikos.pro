export default class Filler{
    constructor(){
        this.createCells();
        return this;
    }
    cellWidth= 20;
    cols= 30;
    rows= 40;
    WIDTH= this.cellWidth * this.cols;
    HEIGHT = this.cellWidth * this.rows;
    colors =  [ 'green', 'red', 'blue'];
    viewBox =  [(this.WIDTH) / -2, (this.HEIGHT) / -2, this.WIDTH + this.cols, this.HEIGHT + this.rows];

    transform =  `translate(${-this.WIDTH / 2 + this.cellWidth / 2 + .5} ${-this.HEIGHT / 2 + this.cellWidth / 2 + .5})`;
    cells = [];

    getSizes(c) {
        return {x: c.col * this.cellWidth - this.cellWidth / 2 + c.col, y: c.row * this.cellWidth - this.cellWidth / 2 + c.row, width: this.cellWidth, height: this.cellWidth}
    };

    createCells() {
        for (let index = 0; index < this.rows * this.cols; index++) {
            let row = Math.floor(index / this.cols);
            let col = index % this.cols;
            const fill = this.randomColor();
            this.cells.push({index, color: fill, row, col, fill,  ...this.getSizes({row,col})})
        }
    };

    randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    getIndex({row,col}){
        return col + this.cols * row;
    }

}
