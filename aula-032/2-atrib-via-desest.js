// ... rest operator, ... spread operator

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, ...resto] = numeros; //vai pegar o resto nao utilizado
console.log(um, tres, cinco);
console.log(resto);

//



//              0          1          2
//           0  1  2    0  1  2    0  1  2
const n = [ [1, 2, 3], [4, 5 ,6], [7, 8, 9] ];

console.log(n[1][2]); //6

const [,[,,seis]] = n;
console.log(seis);

const [lista1, lista2, lista3] = n;
console.log(lista3);
console.log(lista3[2]); //9