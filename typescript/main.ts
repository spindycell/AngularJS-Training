// function log(message){
//     console.log(message);
// }

// var message = "Hello world";
// log(message);

// =====================================================================================//

// function doSomething(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i); //error tapi let akan jadi var ketidak di tsc main.ts
// }

// doSomething();

// =====================================================================================//

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'a',false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0, Green = 1, Blue = 2, purple = 3};
// let backgroundColor = Color.Blue;

// =====================================================================================//

// let message; // tipe any.. karena endswith hanya berfungsi untuk string
// message = 'abc'; // dibawah ini cara mengubah any ke string
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// =====================================================================================//

// ARROW FUNCTION (nice and clean why declare function)

// let log = function(message){ //declare function
//     console.log(message);
// }

// let doLog = (message) => console.log(message); //shorter way
// let doLog = () => console.log(); // jika function kosong (lamda expresion)

// =====================================================================================//

// interface

// interface Point { // awal nama variable harus Kapita
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) => { //inline anotation
//     // ...
// }

// let getDistance = (PointA: Point, PointB: Point) => {
//     // ...
// }

// =====================================================================================//

// COHESION && private && constructor

// class Point {
//     constructor(private _x?: number, private _y?:number){ // tidak perlu this...
//     }
    
//     draw(){
//         console.log('x: '+ (this._x+this._y));
//     }

//     get x(){
//         return this._x;
//     }
//     set x(value){
//         if(value<0)
//             throw new Error('value cannot be less than 0.');

//         this._x = value;
//     }
// }

// let point = new Point(1,2);
// let x = point.x;
// point.x = 10;
// point.draw();

// =====================================================================================//

// MODULES

import { Point } from './point';

let point = new Point(1,2);
point.draw();