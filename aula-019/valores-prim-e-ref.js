//////////////////////////////////////////////////////////////////////////////////
//Primitivos(imutáveis) - string, number, boolean, undefined,
// null, bigint, symbol - VALORES COPIADOS

let nome = 'Luiz';
nome[0] = 'R'; //na string é imutavel, no array não!
console.log(nome[0]);

/////////////////////////////////////////////////////

let a = 'A';
let b = a; // Cópia
console.log(a, b)

a = 'Outra coisa';
console.log(a, b)

//////////////////////////////////////////////////////

// Referência (mutável) - array, object, function - PASSADOS POR REFERENCIA(aponta na memória)

let A = [1, 2, 3];
let B = A; //conforme o tipo de dado que tiver em A, poderá ser copiado ou passado por referencia
console.log(A, B);

A.push(4);
console.log(A, B);

B.pop();
console.log(A, B);