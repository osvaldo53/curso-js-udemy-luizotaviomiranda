const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o 2');
        continue; // pula para a proxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break; // para a execução e encerra a iteração(sai do laço)
    }

}

// continue e break funcionam em qualquer laço for