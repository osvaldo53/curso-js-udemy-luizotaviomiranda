// const nome = 'Osvaldo Souza';
const nome = ['Osvaldo', 'Marcelo', 'Souza']

//for classico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('#######')

//for in retorna indice
for (let i in nome) { 
    console.log(nome[i]);
}

console.log('#######')

//for of retorna o valor contido no indice (nao funciona com objetos)
for (let valor of nome) {
    console.log(valor);
}

console.log('#######')

//
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array); //pode passar só o valor, ou valor e indice, ou array completo tbm
}) 


/* RESUMO
*   For clássico - Geralmente com iteráveis (array ou strings)
*   For in - Retorna o índice ou chave (string, array, objetos)
*   For of - Retorna o valor em si (iteráveis, arrays, ou strings) [objetos não são iteráveis!]
*/