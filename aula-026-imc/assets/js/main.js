function calcularIMC () {
    
    let peso = document.querySelector('#input-peso');
    let altura = document.querySelector('#input-altura');
    const resultado = document.querySelector('#resultado');

    peso = peso.value;
    altura = altura.value;

    let imc = peso / (altura ** 2);
    let avaliacao;

    if (imc < 18.5) {
        avaliacao = '(Abaixo do peso)';
    } else if (imc >= 18.5 && imc < 25) {
        avaliacao = '(Peso normal)';
    } else if (imc >= 25 && imc < 30) {
        avaliacao = '(Sobrepeso)';
    } else if (imc >= 30 && imc < 35) {
        avaliacao = '(Obesidade grau 1)';
    } else if (imc >= 35 && imc < 40) {
        avaliacao = '(Obesidade grau 2)';
    } else if (imc >= 40) {
        avaliacao = '(Obesidade grau 3)';
    }

    resultado.innerHTML = `Seu IMC é ${parseInt(imc)} ${avaliacao}`;
}

