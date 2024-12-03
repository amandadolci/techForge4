// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice,
// paymentStatus e shippingStatus.

// Inicialmente, faça com que a classe Order seja responsável por adicionar itens,
// calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas(Cart, Payment, Shipping)
// e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.
class Cart {
	private items: { name: string; price: number }[] = [];

	addItem(item: { name: string; price: number }): void {
		this.items.push(item);
		console.log(`Item adicionado: ${item.name}, Preço: ${item.price}`);
	}

	calculateTotalPrice(): number {
		return this.items.reduce((total, item) => total + item.price, 0);
	}

	getItems(): { name: string; price: number }[] {
		return this.items;
	}
}

class Payment {
	private status: boolean = false;

	processPayment(total: number): void {
		if (total > 0) {
			this.status = true;
			console.log('Pagamento processado com sucesso.');
		} else {
			console.log('Total insuficiente para processar o pagamento.');
		}
	}

	getStatus(): boolean {
		return this.status;
	}
}

class Shipping {
	private status: boolean = false;

	updateStatus(isPaid: boolean): void {
		if (isPaid) {
			this.status = true;
			console.log('Status de envio atualizado: enviado.');
		} else {
			console.log('O pagamento não foi processado. Não é possível enviar.');
		}
	}

	getStatus(): boolean {
		return this.status;
	}
}

class Order {
	private cart: Cart;
	private payment: Payment;
	private shipping: Shipping;

	constructor() {
		this.cart = new Cart();
		this.payment = new Payment();
		this.shipping = new Shipping();
	}

	addItem(item: { name: string; price: number }): void {
		this.cart.addItem(item);
	}

	processOrder(): void {
		const total = this.cart.calculateTotalPrice();
		this.payment.processPayment(total);
		this.shipping.updateStatus(this.payment.getStatus());
	}

	getOrderSummary(): void {
		console.log('Resumo do Pedido:');
		console.log('Itens:', this.cart.getItems());
		console.log('Preço Total:', this.cart.calculateTotalPrice());
		console.log('Status do Pagamento:', this.payment.getStatus() ? 'Pago' : 'Pendente');
		console.log('Status de Envio:', this.shipping.getStatus() ? 'Enviado' : 'Pendente');
	}
}

const orderRefatorada = new Order();
orderRefatorada.addItem({ name: 'Notebook', price: 1200 });
orderRefatorada.addItem({ name: 'Mouse', price: 50 });
orderRefatorada.processOrder();
orderRefatorada.getOrderSummary();
