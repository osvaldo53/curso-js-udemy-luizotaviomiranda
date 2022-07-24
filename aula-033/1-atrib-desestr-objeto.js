const pessoa = {
    nome: 'Osvaldo',
    sobrenome: 'Souza',
    idade: 26,
    endereco: {
        rua: 'Domingos de Almeida',
        numero: '999'
    }
};

// Atribuição via desestruturação:
// valor padrao no nome caso nao exista no array | mudei nome da variavel sobrenome p/ teste e coloquei valor padrao
const { nome = '', sobrenome: teste = '', idade, endereco: {rua: r, numero} } = pessoa; 
console.log(nome, teste, idade, r, numero);
