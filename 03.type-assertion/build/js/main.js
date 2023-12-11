"use strict";
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = 'hello';
// type guard
const body2Element = document.querySelector('body');
if (body2Element) {
    body2Element.innerHTML = 'hello';
}
