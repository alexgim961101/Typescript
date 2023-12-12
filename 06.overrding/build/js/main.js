"use strict";
function add(x, b) {
    if (typeof x === 'number' && typeof b === 'number') {
        return x + b;
    }
    if (typeof x === 'string' && typeof b === 'string') {
        return Number(x) + Number(b);
    }
    if (typeof x === 'string' && typeof b === 'number') {
        return Number(x) + Number(b);
    }
    if (typeof x === 'number' && typeof b === 'string') {
        return Number(x) + Number(b);
    }
}
console.log(add('11', 2));
