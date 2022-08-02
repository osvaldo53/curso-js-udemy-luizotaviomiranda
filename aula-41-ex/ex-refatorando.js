//escreva uma função que recebe 2 numeros e retorne o maior deles

//opçao 1
// function retornaMaior(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

//opção 2
// function retornaMaior (x, y) {
//     if (x > y) {
//         return x;
//     };
//     return y;
// }

//opção 3
// function retornaMaior (x, y) {
//     if (x > y) return x;
//     return y;
// }

//opção 4
// function retornaMaior (x, y) {
//     return x > y ? x : y;
// }

// console.log(retornaMaior(6, 8));


//opção 5 - arrow function
// const retornaMaior2 = (x, y) => {
//     return x > y ? x : y;
// };

//opção 6 
const retornaMaior2 = (x, y) => x > y ? x : y; //quando a arrow function tem 1 linha o resultado é return automatico

console.log(retornaMaior2(10, 20));