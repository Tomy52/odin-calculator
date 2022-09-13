//Basic math operations, pretty self-explanatory tbh

function add(a,b){
    return (a + b)
}

function subtract(a,b){
    return (a - b)
}

function multiply(a,b){
    return (a * b)
}

function divide(a,b){
    if (b != 0){
        return (a / b)
    } else {
        alert("Can't divide by zero, sorry!")
    }
}

//Perform the previously chosen math operation, (i.e if the user pressed on the 'add' button,
//execute the add function the next time another button is pressed, regardless if it's the add button or not)

function operate(a,b){
    if (operator === '+'){
        return add(a,b)
    } else if (operator === '-'){
        return subtract(a,b)
    } else if (operator === '*'){
        return multiply(a,b)
    } else if (operator === '/'){
        return divide(a,b)
    } else {
        alert("Invalid operator! Please try again")
    }
}

//Link the html number buttons' structure with JS

let calc_display = document.querySelector('.calculator-display')

let btn_one = document.querySelector('#btn-one')
let btn_two = document.querySelector('#btn-two')
let btn_three = document.querySelector('#btn-three')
let btn_four = document.querySelector('#btn-four')
let btn_five = document.querySelector('#btn-five')
let btn_six = document.querySelector('#btn-six')
let btn_seven = document.querySelector('#btn-seven')
let btn_eight = document.querySelector('#btn-eight')
let btn_nine = document.querySelector('#btn-nine')
let btn_zero = document.querySelector('#btn-zero')

let btn_clear = document.querySelector('#btn-clear')

// Let the first number that's displayed on the screen be replaced by whatever the user decides to input next

let replaceNumber = true

// Make number buttons do what they're supposed to do

btn_one.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '1'
        replaceNumber = false
    } else {
        calc_display.innerText += '1'
    }
})

btn_two.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '2'
        replaceNumber = false
    } else {
        calc_display.innerText += '2'
    }
})

btn_three.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '3'
        replaceNumber = false
    } else {
        calc_display.innerText += '3'
    }
})

btn_four.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '4'
        replaceNumber = false
    } else {
        calc_display.innerText += '4'
    }
})

btn_five.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '5'
        replaceNumber = false
    } else {
        calc_display.innerText += '5'
    }
})

btn_six.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '6'
        replaceNumber = false
    } else {
        calc_display.innerText += '6'
    }
})

btn_seven.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '7'
        replaceNumber = false
    } else {
        calc_display.innerText += '7'
    }
})

btn_eight.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '8'
        replaceNumber = false
    } else {
        calc_display.innerText += '8'
    }
})

btn_nine.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '9'
        replaceNumber = false
    } else {
        calc_display.innerText += '9'
    }
})

btn_zero.addEventListener('click', () => {
    if (replaceNumber === true) {
        calc_display.innerText = '0'
        replaceNumber = false
    } else {
        calc_display.innerText += '0'
    }
})

// Add a button that lets you clear the display and whatever it's stored on the memory

btn_clear.addEventListener('click', () => {
    clearCalc()
})

function clearCalc(){
    calc_display.innerText = '0'
    firstNumber = ''
    secondNumber = ''
    operator = ''
    replaceNumber = true
}

// Add variables for the first and second operand, and the operator

let firstNumber = ''
let secondNumber = ''
let operator = ''

// Link the html operator button structure with its code

let btn_add = document.querySelector('#btn-add')
let btn_subtract = document.querySelector('#btn-subtract')
let btn_multiply = document.querySelector('#btn-multiply')
let btn_divide = document.querySelector('#btn-divide')

// Give functionality to each button

// If no operator was chosen before pressing a buttons, the button that was pressed will become the chosen operator

// If there was a chosen operator before pressing a button,
// the previously chosen operation will be performed before changing the operator

btn_add.addEventListener('click', () => {
    if (operator === ''){
        firstNumber = Number(calc_display.textContent)
        operator = '+'
        replaceNumber = true
    } else {
        secondNumber = Number(calc_display.textContent)
        calc_display.innerText = operate(firstNumber,secondNumber)
        operator = '+'
        replaceNumber = true
        firstNumber = Number(calc_display.textContent)
    }
})

btn_subtract.addEventListener('click', () => {
    if (operator === ''){
        firstNumber = Number(calc_display.textContent)
        operator = '-'
        replaceNumber = true
    } else {
        secondNumber = Number(calc_display.textContent)
        calc_display.innerText = operate(firstNumber,secondNumber)
        operator = '-'
        replaceNumber = true
        firstNumber = Number(calc_display.textContent)
    }
})

btn_multiply.addEventListener('click', () => {
    if (operator === ''){
        firstNumber = Number(calc_display.textContent)
        operator = '*'
        replaceNumber = true
    } else {
        secondNumber = Number(calc_display.textContent)
        calc_display.innerText = operate(firstNumber,secondNumber)
        operator = '*'
        replaceNumber = true
        firstNumber = Number(calc_display.textContent)
    }
})

btn_divide.addEventListener('click', () => {
    if (operator === ''){
        firstNumber = Number(calc_display.textContent)
        operator = '/'
        replaceNumber = true
    } else {
        secondNumber = Number(calc_display.textContent)
        calc_display.innerText = operate(firstNumber,secondNumber)
        operator = '/'
        replaceNumber = true
        firstNumber = Number(calc_display.textContent)
    }
})

// Link the HTML equals button with its code

let btn_equals = document.querySelector('#btn-equals')

// The equals button will perform whatever operation was chosen previously
// and display the result on the calculator's display

btn_equals.addEventListener('click', () => {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        calc_display.innerText = operate(Number(firstNumber),Number(calc_display.innerText))
        firstNumber = calc_display.innerText
        replaceNumber = true
    } else {
        calc_display.innerText = calc_display.innerText
    }
})