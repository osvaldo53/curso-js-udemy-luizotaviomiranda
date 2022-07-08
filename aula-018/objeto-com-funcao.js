const pessoa1 = {
    nome: 'Osvaldo',
    sobrenome: 'Souza',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();