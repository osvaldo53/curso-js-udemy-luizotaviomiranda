//O problema do var é que ele permite a variavel ser redeclarada

var nome = 'Osvaldo';
var nome = 'Souza';
console.log(nome);

// O let corrigiu esse problema do var no ECMAscript 2015 (ES6)

nome = 'Osvaldo'; //NÃO FAÇA ISSO

//Não crie variaveis sem const ou let