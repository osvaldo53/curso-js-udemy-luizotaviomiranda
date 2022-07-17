//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date() é função construtora: usa palavra 'new', começa com maiuscula

const tresHoras = 60 * 60 * 3 * 1000; //60seg * 60min * 3hr * 1000ms
const umDia = 60 * 60 * 24 * 1000 // 1 dia em ms
const data = new Date(0 + tresHoras + umDia);  // 01/01/1970 Timestamp unix ou época unix

console.log(data.toString());
