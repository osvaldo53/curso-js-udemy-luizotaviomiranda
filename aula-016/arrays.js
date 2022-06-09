//                0        1       2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

// console.log(alunos.length, 'numero de elementos do array')
// alunos[alunos.length] = 'José' //adiciona no fim
// alunos[alunos.length] = 'Márcia'  
// console.log(alunos)

alunos.push('José'); //adiciona no fim
alunos.push('Márcia');
console.log(alunos);

alunos.unshift('Duda'); //adiciona no inicio (vai mudar o indice dos outros)
alunos.unshift('Mariza');
console.log(alunos);

const removido = alunos.pop(); //pop remove o ultimo elemento do array (nesse exemplo o removido ainda foi salvo numa variavel...)
console.log(removido, 'foi removido');
console.log(alunos);

const removido2 = alunos.shift(); //shift remove o primeiro elemento
console.log(removido2, 'foi removido');
console.log(alunos);

delete alunos[2]; //vai deletar o conteudo do elemento deixando o item vazio
console.log(alunos, 'completo');

console.log(alunos.slice(0, 3), 'slice 0, 3') //o ultimo(3) não é mostrado
console.log(alunos.slice(0, -2), 'slice 0, -2') // o numero negativo diminui a partir do ultimo elemento

console.log(typeof alunos);
console.log(alunos instanceof Array);