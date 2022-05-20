// As regras das variaveis também se aplicam para as constantes
// Não pode modificar o valor de uma constante
// Não pode declarar a const sem colocar o valor

const primeiroNumero = 5; // Number
const segundoNumero = '10'; // 5 + 10 = 510
const resultado = primeiroNumero * segundoNumero;

const resultadoAdicao = primeiroNumero + segundoNumero;
console.log(resultadoAdicao); //string e numero o '+' vai concatenar

const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof(primeiroNumero));
console.log(typeof segundoNumero);