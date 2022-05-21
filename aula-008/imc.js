const nome = 'Osvaldo';
const sobrenome = 'Souza';
const idade = 26;
const peso = 80;
const altura = 1.75;
let imc = peso / (altura * altura); // peso /(altura²)
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)

console.log('')
//template strings:

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)