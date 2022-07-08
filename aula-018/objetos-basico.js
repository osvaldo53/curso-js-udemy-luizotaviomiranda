function criaPessoa (nome, sobrenome, idade) { //função 'factory', ela fabrica objetos
    return {nome, sobrenome, idade};  
} //como os valores tem o mesmo nome pode colocar só uma vez e o js entende
//nome: nome,  
//sobrenome: sobrenome,
//idade: idade

const pessoa1 = criaPessoa('Osvaldo', 'Souza', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 30);
const pessoa3 = criaPessoa('Jean', 'Pierre', 28);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)