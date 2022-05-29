let num1 = 9.54578;
let num2 = Math.floor(num1); //arredonda para baixo
let num3 = Math.ceil(num1); //arredonda para cima
let num4 = Math.round(num1)
console.log(num2, 'num1 arredondado para baixo');
console.log(num3, 'num 1 arredondado para cima');
console.log(num4, 'arredonda para cima ou baixo automatico');

console.log(Math.max(1, 2, 10, -5, -100, 500, 30), 'Maior numero da sequencia');
console.log(Math.min(1, 2, 10, -5, -100, 500, 30), 'Menor numero da sequencia');

console.log(Math.random(), 'gera um número aleatorio entre 0 e 1');

const aleatorio = Math.round(Math.random() * 10)
console.log(aleatorio, 'aleatorio * 10 e arredondado')

console.log(100 / 0); // no js a divisao por 0 nao da erro, e a conta vai ser valida(true), tomar cuidado com isso