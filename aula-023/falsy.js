/*

&&
||

FALSY:
false
0
'' "" `` (strings VAZIAS)
null / undefined
NaN

*/

console.log('Luiz' && 'Maria');
console.log('Luiz' || '' && 'Maria')

//////////////////////////////////////////

function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Joaozinho';

console.log(vaiExecutar && falaOi());

//////////////////////////////////////////

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)

//////////////////////////////////////////

//brincadeira:

const a = 0;
const b = null;
const c = 'false'; //esse vai ser exibido pois é verdadeiro(string)
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
//(se todas forem falsas a ultima falsa será exibida)