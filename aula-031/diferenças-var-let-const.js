const verdadeira = true;

//let tem escopo de BLOCO { }
//var só tem escopo de função

let nome = 'Osvaldo'; 
let nome2 = 'Osvaldo'; //criando

if (verdadeira) {
    let nome2 = 'Souza'; //criando (não está redeclarando)
    console.log(nome, nome2)

    if (verdadeira) {
        let nome2 = 'Marcelo'; //criando outra
        console.log(nome, nome2); 
    }
}

// let -> se a variavel nome2 nao for encontrada no bloco de Marcelo, vai ser buscada no bloco Souza, e por ultimo no escopo global

// var -> o var pode ser redeclarado, sendo assim sempre vai ser usado o valor da ultima vez que ela foi redeclarada no código! 
