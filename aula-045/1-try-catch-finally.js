try {
    // executada quando nao ha erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    //try catch aninhado
    try {
        console.log(b);
    } catch {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou finally')
    }

} catch (e) {
    // executado quando há erros
    console.log('Tratando o erro');
} finally {
    // sempre
    console.log('FINALLY: Eu sempre sou executado');
}