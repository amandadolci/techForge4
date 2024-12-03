"use strict";
class BibliotecaGestao {
    constructor(livros) {
        this.livros = [];
        this.livros = livros;
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor === autor);
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
const gestaoBiblioteca = new BibliotecaGestao([
    { titulo: 'Livro X', autor: 'Autor X', genero: 'Ficção', disponivel: true },
    { titulo: 'Livro Y', autor: 'Autor Y', genero: 'Romance', disponivel: false },
    { titulo: 'Livro Z', autor: 'Autor Z', genero: 'Aventura', disponivel: true },
]);
console.log(gestaoBiblioteca.filtrarPorGenero('Ficção'));
console.log(gestaoBiblioteca.buscarPorAutor('Autor A'));
console.log(gestaoBiblioteca.obterLivrosDisponiveisOrdenados());
