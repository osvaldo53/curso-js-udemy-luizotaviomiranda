let string1 = "Um \"texto\" exibir a barra invertida \\"; //a barra invertida escapa o caractere a seguir, para exibir uma barra invertida usamos outra barra invertida na frente
console.log(string1);

//
               01234567
let string2 = "Um texto";
console.log(string2[4]);
console.log(string2.charAt(7));
console.log(string2.indexOf('o', 3)); //encontra a posição mas só da posição 3 pra frente
console.log(string2.lastIndexOf('o', 3)); //começa a procurar do fim, no caso da posição 3 pra tras nao tem letra 'o' entao retorna -1 pois nao encontrou
console.log(string2.replace('Um', 'Outro')); //substitui 

//
let string3 = "O rato roeu a roupa do rei de roma.";
console.log(string3.replace(/r/g, '#')); //expressão regular entre barras, g faz repetir para todas
console.log(string3.length); //exibe a quantidade de caracteres
console.log(string3.slice(2, 5)); // fatia de uma posiçao ate outra
console.log(string3.split(' ', 3)); //vai dividir a string no caractere declarado, pode adicionar quantas vezes vai fazer, no caso foi 3
console.log(string3.toUpperCase());
console.log(string3.toLowerCase());