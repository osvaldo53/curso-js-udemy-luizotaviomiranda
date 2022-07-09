function meuEscopo() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        let nome = form.querySelector('.nome')
        let sobrenome = form.querySelector('.sobrenome')
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')

        function criaPessoa(nome, sobrenome, peso, altura) {
            return {nome: nome.value,
                    sobrenome: sobrenome.value,
                    peso: peso.value,
                    altura: altura.value}
        };

        pessoas.push(criaPessoa(nome, sobrenome, peso, altura));
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm) //quando acontecer um submit, executa a funçao recebeEventoForm
};

meuEscopo();
