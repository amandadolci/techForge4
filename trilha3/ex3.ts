// Exercício 3:
// Crie uma classe Pagamento com um método processar().
// Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação
// do método processar(). A classe PagamentoCartao deve validar o número do cartão
// e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto.
// Crie uma função que aceite diferentes tipos de pagamento e processe - os usando polimorfismo.
class Pagamento {
	processar(): void {
		console.log('Processando pagamento...');
	}
}

class PagamentoCartao extends Pagamento {
	constructor(private numeroCartao: string) {
		super();
	}

	processar(): void {
		if (this.validarCartao()) {
			console.log('Pagamento por cartão processado com sucesso.');
		} else {
			console.log('Número do cartão inválido.');
		}
	}

	private validarCartao(): boolean {
		const regex = /^[0-9]{16}$/;
		return regex.test(this.numeroCartao);
	}
}

class PagamentoBoleto extends Pagamento {
	processar(): void {
		const codigoBoleto = this.gerarCodigoBoleto();
		console.log(`Boleto gerado com o código: ${codigoBoleto}.`);
	}

	private gerarCodigoBoleto(): string {
		let codigo = '';
		while (codigo.length < 48) {
			codigo += Math.floor(Math.random() * 10).toString();
		}
		return codigo;
	}
}

function processarPagamentos(pagamentos: Pagamento[]): void {
	pagamentos.forEach(pagamento => pagamento.processar());
}

const pagamento1 = new PagamentoCartao('1234567890123456');
const pagamento2 = new PagamentoBoleto();

const pagamentos: Pagamento[] = [pagamento1, pagamento2];

processarPagamentos(pagamentos);
