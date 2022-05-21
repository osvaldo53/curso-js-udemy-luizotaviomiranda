let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// FORMA ANTIGA DE RESOLVER:
// const varAtemp = varA;
// varA = varB;
// varB = varC;
// varC = varAtemp;

// FORMA MODERNA DE RESOLVER: 
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);