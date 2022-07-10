/*
Entre 0 e 11 - bom dia
Entre 12 e 17 - boa tarde
Entre 18 e 23 - boa noite
*/ 

// If pode ser usado sozinho
// Sempre que uso o 'else', preciso de um if antes
// Posso ter vários 'else if' na checagem
// Só posso ter um 'else' na checagem
// Podemos usar condiçoes sem 'else if', utilizando apenas if e else

const hora = 30;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Olá!')
}