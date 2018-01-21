
export class Point {
    constructor(private _x?:number, private y?:number){
    }
    get x(){
        return this._x;
    }
    drawPoint(){
        console.log("Coordinates ", this._x, this.y);
    }
}