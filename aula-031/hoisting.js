//var - acontece o hoisting, se usar a variavel antes da declaração o js vai considerar undefined
console.log(sobrenome);
var sobrenome = 'Souza';

//let - nao acontece hoisting, o programa vai mostrar erro
console.log(nome);
let nome = 'Osvaldo';



//com as funções tambem ocorre o hoisting(elevação)