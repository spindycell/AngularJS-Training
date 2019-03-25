export class Point {
    constructor(private _x?: number, private _y?:number){ // tidak perlu this...
    }
    
    draw(){
        console.log('x: '+ (this._x+this._y));
    }

}