"use strict";
// string
let user = "alex";
// number
let age = 21;
let float = 1.234;
// array
let arr = [1, 2, 3, 4];
let arrStr = ["a", 'a', 'b'];
// readonly array
let readonlyArr = [2, 3, 4];
// 여러 타입의 배열
let arr2 = ["alex", 1, "num", 2, 3];
// 튜플
let tuple1 = ['s', 2];
let tuple2 = [['s', 2], ['b', 3]];
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let tmp = false;
let tmp2 = tmp;
// object
let obj = {};
let arr3 = [];
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title',
    description: 'description'
};
// union
let union;
union = 'hi';
union = 123;
// function
let func1;
func1 = (x, y) => {
    return x * y;
};
let func2;
func2 = () => {
    console.log('hi');
};
