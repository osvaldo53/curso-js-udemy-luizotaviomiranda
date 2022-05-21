// String, number, undefined, null, boolean
const nome = 'Osvaldo'; //string
const nome1 = "Osvaldo"; //string
const nome2 = `Osvaldo`; //string

const num1 = 10; //number
const num2 = 10.52; //number

let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memoria, mas o dev é que vai indicar isso

const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof sobrenomeAluno); // JS aponta null como objeto mas não é, é um bug da linguagem