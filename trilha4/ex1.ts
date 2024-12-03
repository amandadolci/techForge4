// 1 - Produtos
// Crie uma interface chamada Produto que tenha as propriedades id(número),
//   nome(string) e preco(número).
// Em seguida, crie uma classe ItemLoja que implemente essa interface.
// No construtor da classe, atribua valores às propriedades id, nome e preco.
interface Produto {
	id: number;
	nome: string;
	preco: number;
	quantidade: number;
	calcularValorEstoque(): number;
}

class ItemLoja implements Produto {
	id: number;
	nome: string;
	preco: number;
	quantidade: number;

	constructor(id: number, nome: string, preco: number, quantidade: number) {
		this.id = id;
		this.nome = nome;
		this.preco = preco;
		this.quantidade = quantidade;
	}

	calcularValorEstoque(): number {
		return this.preco * this.quantidade;
	}
}

const item1 = new ItemLoja(1, 'Produto A', 100, 20);
const item2 = new ItemLoja(2, 'Produto B', 50, 10);

console.log(`Valor total do estoque do ${item1.nome}: R$ ${item1.calcularValorEstoque()}`);
console.log(`Valor total do estoque do ${item2.nome}: R$ ${item2.calcularValorEstoque()}`);
