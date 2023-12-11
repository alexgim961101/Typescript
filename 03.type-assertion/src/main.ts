const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerHTML = 'hello'

// type guard
const body2Element = document.querySelector('body');
if(body2Element) {
    body2Element.innerHTML = 'hello';
}