"use strict";
// Exercício 2:
// Crie uma classe Livro com os atributos título(string), autor(string), páginas(number) e lido(boolean).
// Adicione um método para marcar o livro como lido.
class Livro {
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
const livro = new Livro('Harry Potter e o Prisioneiro de Azkaban', 'J.K. Rowling', 350);
livro.marcarComoLido();
console.log(livro.lido);
