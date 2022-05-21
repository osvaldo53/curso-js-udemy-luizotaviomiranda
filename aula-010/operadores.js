/*

  Aritméticos:
  + adição ou concatenação
  - * / subtração, multipl, divisao
  ** Potenciação
  % Resto da divisão 

  Precedência: () ** * / % + -
  
  Incremento: ++
  Decremento: --

 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) / num3);

let contador = 1;
contador++; //2
contador++; //3
++contador; //4
++contador; //5
contador--; //4
--contador; //3
console.log(contador);

let contador2 = 1;
console.log(contador2++); //vai mostrar 1 pois o operador de incremento veio depois

let contador3 = 1;
console.log(++contador3); //vai mostrar 2 pois o operador de incremento veio antes


let contador4 = 0;
contador4 += 2; //contador = contador + passo
console.log(contador4);
contador4 += 2; 
console.log(contador4);
contador4 += 2; 
console.log(contador4);

let contador5 = 2;
contador5 *= 2; //contador = contador + passo
console.log(contador5);
contador5 **= 2; 
console.log(contador5);
contador5 -= 2; 
console.log(contador5);

//NaN - Not a Number
const n1 = 10;
const n2 = 'Jose';
console.log(n1 * n2) //tomar cuidado com os tipos de dados ao calcular

//conversao para numero: parseInt (inteiro), parseFloat (decimais), Number (decimal ou inteiro)
const n3 = 10;
const n4 = Number('5.2'); 
console.log(n3 + n4);
console.log(typeof n2)