//(condição) ? 'Valor para verdadeiro' : 'Valor para falso'
 
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'FREE'
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Vip');
// } else {
//     console.log('Free')
// }