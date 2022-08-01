const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //gera um NodeList - o nodelist se comporta quase igual um array mas nao é um array

const estilosBody = getComputedStyle(document.body); //pega todos estilos do css no body
const backgroundColorBody = estilosBody.backgroundColor; //pega especifico o backgroundcolor daquele body
console.log(backgroundColorBody) //mostra no console do navegador a cor rgb

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

