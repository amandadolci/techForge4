// 3 - Cadastro e Busca de Produtos em uma Loja:
// Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
// Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
// Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined
// que recebe um código de produto e retorna o produto correspondente, caso exista;
// caso contrário, retorne undefined
interface ProdutoLoja {
	codigo: number;
	nome: string;
}

class Loja {
	private produtos: ProdutoLoja[] = [];

	constructor(produtos: ProdutoLoja[]) {
		this.produtos = produtos;
	}

	buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
		return this.produtos.find(produto => produto.codigo === codigo);
	}
}

const loja = new Loja([
	{ codigo: 1, nome: 'Produto A' },
	{ codigo: 2, nome: 'Produto B' },
]);

console.log(loja.buscarProdutoPorCodigo(1));
console.log(loja.buscarProdutoPorCodigo(3));
