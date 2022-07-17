                    //ano, mês, dia, hr, min, seg, ms
// const data = new Date(1995, 8, 9, 23, 30, 0, 1000);
// console.log(data.toString());

const data = new Date('2022-07-17 10:39:59.200');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); //0 - domingo, 6 - sabado
console.log(data.toString());

console.log(Date.now()); //DATA DE HOJE EM MILISSEGUNDOS(ms)
