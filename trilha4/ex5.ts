// 5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:
// Crie uma interface LivroBiblioteca com as propriedades titulo(string), autor(string),
// genero(string) e disponivel(boolean).
// Crie uma classe BibliotecaGestao que contenha um array de livros implementando
// a interface LivroBiblioteca.
// Implemente os seguintes métodos:
// filtrarPorGenero(genero: string):
// LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
//   buscarPorAutor(autor: string):
// LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
//   obterLivrosDisponiveisOrdenados():
// LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis,
//   ordenada alfabeticamente pelo título.
interface LivroBiblioteca {
	titulo: string;
	autor: string;
	genero: string;
	disponivel: boolean;
}

class BibliotecaGestao {
	private livros: LivroBiblioteca[] = [];

	constructor(livros: LivroBiblioteca[]) {
		this.livros = livros;
	}

	filtrarPorGenero(genero: string): LivroBiblioteca[] {
		return this.livros.filter(livro => livro.genero === genero);
	}

	buscarPorAutor(autor: string): LivroBiblioteca[] {
		return this.livros.filter(livro => livro.autor === autor);
	}

	obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
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
