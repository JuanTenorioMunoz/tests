const numberButtons = document.querySelectorAll('.numberButton')
const display = document.querySelector('.display')

const appendDigit = (digit) => {
     display.innerHTML += digit;
     console.log(display);
}

const buttonTouch = (e) => {
    console.log(e.target.innerHTML);
    appendDigit(e.target.innerHTML);
}

numberButtons.forEach(button => {
    button.addEventListener('click',buttonTouch)
});