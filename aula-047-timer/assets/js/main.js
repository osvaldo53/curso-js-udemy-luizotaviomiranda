function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); //vai criar uma data baseado nos segundos (ms * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0; //global
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000); //a cada 1000ms(1seg) vai ser incrementado 1 segundo
    }
    
    iniciar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer); //para caso ja esteja rodando o timer...
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
}

relogio();