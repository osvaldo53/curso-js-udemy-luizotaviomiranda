window.alert('Nossa mensagem.'); //retorna undefined

let confirma = window.confirm('Deseja cancelar?'); //vai retornar true ou false
window.alert(confirma)

window.prompt('Digite alguma coisa:');

//quando uma função está dentro de um objeto, assim como essas estão dentro do objeto window, chamamos de método, quando está fora chamamos de função

let num1 = window.prompt('Digite um numero:');
num1 = Number(num1); //se nao converter o numero seria string
alert(num1);