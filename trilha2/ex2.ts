// Exercício 2:
// Crie uma classe Livro com os atributos título(string), autor(string), páginas(number) e lido(boolean).
// Adicione um método para marcar o livro como lido.
class Livro {
	titulo: string;
	autor: string;
	paginas: number;
	lido: boolean;

	constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
		this.titulo = titulo;
		this.autor = autor;
		this.paginas = paginas;
		this.lido = lido;
	}

	marcarComoLido(): void {
		this.lido = true;
	}
}

const livro = new Livro('Harry Potter e o Prisioneiro de Azkaban', 'J.K. Rowling', 350);
livro.marcarComoLido();
console.log(livro.lido);
