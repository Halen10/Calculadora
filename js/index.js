/* Variables */
const result = document.getElementById("display-result");
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const numP = document.getElementById("numP");
const numS = document.getElementById("numS");
const numR = document.getElementById("numR");
const numM = document.getElementById("numM");
const numD = document.getElementById("numD");
const numI = document.getElementById("numI");
const numE = document.getElementById("numE");
const numC = document.getElementById("numC");
let operador, n1 ,n2;

/* Events */
num0.addEventListener("click",(e)=>{result.textContent += "0";})
num1.addEventListener("click",(e)=>{result.textContent += "1";})
num2.addEventListener("click",(e)=>{result.textContent += "2";})
num3.addEventListener("click",(e)=>{result.textContent += "3";})
num4.addEventListener("click",(e)=>{result.textContent += "4";})
num5.addEventListener("click",(e)=>{result.textContent += "5";})
num6.addEventListener("click",(e)=>{result.textContent += "6";})
num7.addEventListener("click",(e)=>{result.textContent += "7";})
num8.addEventListener("click",(e)=>{result.textContent += "8";})
num9.addEventListener("click",(e)=>{result.textContent += "9";})
numP.addEventListener("click",(e)=>{result.textContent += ".";})
numS.addEventListener("click",(e)=>{operaciones("+");})
numR.addEventListener("click",(e)=>{operaciones("-");})
numM.addEventListener("click",(e)=>{operaciones("*");})
numD.addEventListener("click",(e)=>{operaciones("/");})
numI.addEventListener("click",(e)=>{igual();})
numC.addEventListener("click",(e)=>{result.textContent = "";})
numE.addEventListener("click",(e)=>{result.textContent = result.textContent.toString().slice(0, -1);})


/* Funsions */
function suma(n1, n2){
    let suma = n1 + n2;
    result.textContent = suma;
}
function resta(n1, n2){
    let resta = n1 - n2;
    result.textContent = resta;
}
function multiplicacion(n1, n2){
    let multiplicacion = n1 * n2;
    result.textContent = multiplicacion;
}
function division(n1, n2){
    let division;
    if(n2 !== 0){
        division = n1 / n2;
        result.textContent = division;
    }else{
        result.textContent = "Error";
    }
    return division;
}
function operaciones(operadores){
    n1 = result.textContent;
    operador = operadores;
    result.textContent = "";
}
function igual(){
    n2 = result.textContent;
    switch(operador){
        case "+":
            suma(parseFloat(n1),parseFloat(n2));
        break;
        case "-": 
            resta(parseFloat(n1),parseFloat(n2));
        break;
        case "*":
            multiplicacion(parseFloat(n1),parseFloat(n2));
        break;
        case "/":
            division(parseFloat(n1),parseFloat(n2));
        break;
    }
}