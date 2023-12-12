function add(x: number, b: number): number;
function add(x: string, b: string): number;
function add(x: number, b: string): number;
function add(x: string, b: number): number;
function add(x: any, b: any): any {
    if(typeof x === 'number' && typeof b === 'number') {
        return x + b;
    }
    if(typeof x === 'string' && typeof b === 'string') {
        return Number(x) + Number(b); 
    }
    if(typeof x === 'string' && typeof b === 'number') {
        return Number(x) + Number(b); 
    }
    if(typeof x === 'number' && typeof b === 'string') {
        return Number(x) + Number(b); 
    }
}

console.log(add('11', 2));
