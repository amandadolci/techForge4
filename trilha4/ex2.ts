// 2 - Documentos
// Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
// Implemente essa interface em uma classe chamada Texto e crie um método exibir()
// que retorna uma string com o título e o conteúdo formatados da seguinte forma:
// "Título: [titulo], Conteúdo: [conteudo]".
interface Documento {
	titulo: string;
	conteudo: string;
}

class Texto implements Documento {
	constructor(public titulo: string, public conteudo: string) {}

	exibir(): string {
		return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
	}
}

const texto = new Texto('Título', 'Conteúdo lorem ipsum');
console.log(texto.exibir());
