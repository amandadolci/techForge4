// 4 - Sistema de Biblioteca com Checagem de Disponibilidade:
// Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
// Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
// Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os
// livros cuja propriedade disponivel seja true.
interface LivroTrilha4 {
	titulo: string;
	autor: string;
	disponivel: boolean;
}

class Biblioteca {
	private livros: LivroTrilha4[];

	constructor() {
		this.livros = [];
	}

	adicionarLivro(livro: LivroTrilha4): void {
		this.livros.push(livro);
		console.log(`Livro adicionado: ${livro.titulo} por ${livro.autor}`);
	}

	buscarLivrosDisponiveis(): LivroTrilha4[] {
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
