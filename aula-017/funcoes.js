function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz'); 
console.log(variavel);


////////////////////////////////////////


function soma(x = 1, y = 1) { //valor padrao do parametro caso nao seja passado na funcao
    const resultado = x + y;
    return resultado; //quando o js chega no return nada mais será executado depois na function
}

//console.log(resultado)  -> as variaveis dentro da function nao podem ser acessadas de fora
console.log(soma(2, 2));
console.log(soma(3, 5));
console.log(soma('Osvaldo', 'Souza'));
console.log(soma(4));
console.log(soma());



////////////////////////////////////////////

//função anonima:

const raiz = function (n) {
    return n ** 0.5;
}; // ponto e virgula obrigatorio

console.log(raiz(9));

/////////////////////////////////////////////

//arrow function:

const raizquadrada = n => n ** 0.5; //como só tem 1 parametro nao precisa parentese no n

console.log(raizquadrada(16));
