let nome; //declarou a variável
nome = 'João';
console.log(nome);
nome = 'Otávio';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2010.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

//Não podemos criar variáveis com palavras reservadas. ex: let console
//Variáveis precisam ter nomes com significado. ex: nomeCliente
//Não pode começar o nome de uma variável com um número.
//Não pode conter espaços ou traços
//Utilizar camelCase. ex: let nomeCompletoDoCliente
//Case-sensitive (minusculos e maiusculos tem diferença)
//Não pode redeclarar variáveis com let
//Não utilizar var, utilizar let