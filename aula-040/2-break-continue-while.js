const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; // ATENÇÃO
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado saindo...');
        i++; // ATENÇÂO
        break;
    }

    i++ // ATENçÃO
}

// Atenção! Quando usar break/continue com while ou do while, é preciso atualizar a variavel de controle antes da palavra, pois senão o break/continue vai impedir que a variavel seja atualizada gerando um loop infinito