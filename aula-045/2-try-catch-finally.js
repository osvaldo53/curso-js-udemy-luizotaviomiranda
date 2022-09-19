function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date(); //se nao enviar data ele vai gerar data automatica
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(); //inserir aki data ou valores com erro
    console.log(hora);
} catch (e) {
    //tratar erro
} finally {
    console.log('Tenha um bom dia.')
}



