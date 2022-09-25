//a funçao declara com a palavra function tem uma variavel especial que se chama arguments, que sustenta todos os argumentos enviados 

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 4, 5, 10);