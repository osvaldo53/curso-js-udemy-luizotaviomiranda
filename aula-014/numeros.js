let num1 = 150; // number
let num2 = 2.5; // number
console.log(num1.toString() + num2);
console.log(typeof num1); //vai continuar sendo number pois nao mudei na variavel
// num1 = num1.toString(); -> nesse caso eu alteraria realmente para string
console.log(num1.toString(2)); /*passando o paramentro 2 para o toString ele vai exibir a versão em binário do numero, Esse parâmetro é chamado de radix e pode receber um número entre 2 e 36 especificando a base utilizada para representar os valores numéricos.
2 (base 2), 8 (base 8), 10 (base 10), 16 (base 16), etc, etc...
Ex.:
Para número 254 (decimal)
(254).toString(2); // Binário 11111110
(254).toString(8); // Octal 376
(254).toString(10); // Decimal 254
(254).toString(16); // Hexadecimal fe */

let num3 = 10.578933344532;
console.log(num3.toFixed(2)); // essa função define quantas casas decimais vão ser mostradas para o usuário
console.log(Number.isInteger(num3)) //retorna se o numero é inteiro - true ou false
let temp = num3 * 'Olá';
console.log(Number.isNaN(temp)); // o numero temp, é uma conta inválida(NaN)? true/false
