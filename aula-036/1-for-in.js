const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for in -> lê os indices ou chaves do objeto [0, 1, 2]
for (let indice in frutas) {
    console.log(frutas[indice]);
}

//

const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Souza',
    idade: 26
}

// no objeto vai mostrar as chaves ao invés dos indices
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

console.log(pessoa.nome);

const chave = 'nome';
// console.log(pessoa['nome']);
console.log(pessoa[chave]);