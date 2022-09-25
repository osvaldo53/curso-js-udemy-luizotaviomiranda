////Declaração de função (function hoisting)////

//posso chamar a função antes de declarar pois ocorre o hoisting, as funcoes sao elevadas para o topo do arquivo pelo motor do JS
falaOi(); 
function falaOi() {
    console.log('Oi');
};

//-------------------------------------------------------------------


////First-class objects (Objetos de primeira classe)////
// Function expression 

const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

//(Variavel recebe uma funçao e portanto passa a ser uma funçao. Isso é util para usar essa variavel como parametro de outra funçao, para que ela seja executada) Exemplo:

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);
//--------------------------------------------

//// Arrow function ////

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();
//------------------------

//// Dentro de objeto ////

const obj = {
    falar: function() {
        console.log('Objeto falando...');
    }
};
obj.falar();
//-------------------------