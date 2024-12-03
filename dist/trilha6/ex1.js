"use strict";
// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice,
// paymentStatus e shippingStatus.
// Inicialmente, faça com que a classe Order seja responsável por adicionar itens,
// calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas(Cart, Payment, Shipping)
// e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Item adicionado: ${item.name}, Preço: ${item.price}`);
    }
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    getItems() {
        return this.items;
    }
}
class Payment {
    constructor() {
        this.status = false;
    }
    processPayment(total) {
        if (total > 0) {
            this.status = true;
            console.log('Pagamento processado com sucesso.');
        }
        else {
            console.log('Total insuficiente para processar o pagamento.');
        }
    }
    getStatus() {
        return this.status;
    }
}
class Shipping {
    constructor() {
        this.status = false;
    }
    updateStatus(isPaid) {
        if (isPaid) {
            this.status = true;
            console.log('Status de envio atualizado: enviado.');
        }
        else {
            console.log('O pagamento não foi processado. Não é possível enviar.');
        }
    }
    getStatus() {
        return this.status;
    }
}
class Order {
    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    addItem(item) {
        this.cart.addItem(item);
    }
    processOrder() {
        const total = this.cart.calculateTotalPrice();
        this.payment.processPayment(total);
        this.shipping.updateStatus(this.payment.getStatus());
    }
    getOrderSummary() {
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
