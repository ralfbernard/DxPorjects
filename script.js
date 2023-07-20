let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");
let btnMultiply = document.getElementById("btn-multiply");
let btnDivide = document.getElementById("btn-divide");

let clear = document.getElementById("btn-clear");
let btnEquals = document.getElementById("btn-equals");

let calcDisplay = document.getElementById('calculation-display');
let calculation = '';

btn0.addEventListener("click", () => {
    calculation = calculation + "0";
    calcDisplay.textContent = calculation;
})
btn1.addEventListener("click", () => {
    calculation = calculation + "1";
    calcDisplay.textContent = calculation;
})
btn2.addEventListener("click", () => {
    calculation = calculation + "2";
    calcDisplay.textContent = calculation;
})
btn3.addEventListener("click", () => {
    calculation = calculation + "3";
    calcDisplay.textContent = calculation;
})
btn4.addEventListener("click", () => {
    calculation = calculation + "4";
    calcDisplay.textContent = calculation;
})
btn5.addEventListener("click", () => {
    calculation = calculation + "5";
    calcDisplay.textContent = calculation;
})
btn6.addEventListener("click", () => {
    calculation = calculation + "6";
    calcDisplay.textContent = calculation;
})
btn7.addEventListener("click", () => {
    calculation = calculation + "7";
    calcDisplay.textContent = calculation;
})
btn8.addEventListener("click", () => {
    calculation = calculation + "8";
    calcDisplay.textContent = calculation;
})
btn9.addEventListener("click", () => {
    calculation = calculation + "9";
    calcDisplay.textContent = calculation;
})



clear.addEventListener("click", () => {
    calculation = '';
    calcDisplay.textContent = calculation;
})
btnPlus.addEventListener("click", () => {
    calculation = calculation + "+";
    calcDisplay.textContent = calculation;
})
btnMinus.addEventListener("click", () => {
    calculation = calculation + "-";
    calcDisplay.textContent = calculation;
})
btnMultiply.addEventListener("click", () => {
    calculation = calculation + "*";
    calcDisplay.textContent = calculation;
})
btnDivide.addEventListener("click", () => {
    calculation = calculation + "/";
    calcDisplay.textContent = calculation;
})
btnEquals.addEventListener("click", () => {
    calculation = eval(calculation);
    calcDisplay.textContent = calculation;
})

