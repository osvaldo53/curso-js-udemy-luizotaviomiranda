//Padrão IEEE 754-2008

let num1 = 0.7; 
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

console.log(num1);
console.log(Number.isInteger(num1));

num1 = num1.toFixed(2);
console.log(num1); //vai mostar 1.0 mas nao vai resolver...

num1 = parseFloat(num1); // a função parseFloat vai resolver o problema, o Number() também funciona
console.log(num1)
console.log(Number.isInteger(num1));


//////////////////////////////////////////////////////////////////////
// Para resolver usando calculos: 
let num3 = 0.7;
let num4 = 0.1;

num3 = ((num3 * 100) + (num4 * 100)) / 100;
num3 = ((num3 * 100) + (num4 * 100)) / 100;
num3 = ((num3 * 100) + (num4 * 100)) / 100;
console.log(num3)

console.log(Number.isInteger(num3));