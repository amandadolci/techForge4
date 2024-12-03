"use strict";
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro adicionado: ${livro.titulo} por ${livro.autor}`);
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    disponivel: true,
});
biblioteca.adicionarLivro({ titulo: '1984', autor: 'George Orwell', disponivel: false });
biblioteca.adicionarLivro({
    titulo: 'O Apanhador no Campo de Centeio',
    autor: 'J.D. Salinger',
    disponivel: true,
});
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log('Livros disponíveis:');
livrosDisponiveis.forEach(livro => console.log(`- ${livro.titulo} por ${livro.autor}`));
