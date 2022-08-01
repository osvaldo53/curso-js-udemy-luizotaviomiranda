// while e do while sao usados para quando não sabemos exatamente quantas vezes vamos executar

//while primeiro verifica a condição, se for true executa, se for false ele já nao executa

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}



//////////////////////////
console.log('#######################')
//////////////////////////



do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

// o do while executa primeiro o código, e depois verifica a condição, então ele sempre executa pelo menos uma vez