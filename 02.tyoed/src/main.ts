// string
let user:string = "alex"

// number
let age:number = 21;
let float:number = 1.234;

// array
let arr:Array<number> = [1, 2, 3, 4];
let arrStr:Array<string> = ["a", 'a', 'b'];

// readonly array
let readonlyArr:ReadonlyArray<number> = [2, 3, 4];

// 여러 타입의 배열
let arr2:Array<string | number> = ["alex", 1, "num", 2, 3] ;

// 튜플
let tuple1:[string, number] = ['s', 2]
let tuple2:[string, number][] = [['s', 2], ['b', 3]]

// any
let any:any = 'abc';
any = 1;
any = [];

// unknown
let tmp:unknown = false;
let tmp2:boolean = tmp as boolean;

// object
let obj: object = {};
let arr3: object = [];
// let nul: object = null;
let date: object = new Date();

const obj1: { id: number, title: string, description: string } = {
    id: 1,
    title: 'title',
    description: 'description'
}

// union
let union: (string | number)
union = 'hi';
union = 123;

// function
let func1: (x:number, y:number) => number;
func1 = (x, y) => {
    return x * y;
}

let func2: () => void;
func2 = () => {
    console.log('hi');
}
