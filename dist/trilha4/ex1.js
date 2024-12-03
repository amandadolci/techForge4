"use strict";
class ItemLoja {
    constructor(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }
}
const item1 = new ItemLoja(1, 'Produto A', 100, 20);
const item2 = new ItemLoja(2, 'Produto B', 50, 10);
console.log(`Valor total do estoque do ${item1.nome}: R$ ${item1.calcularValorEstoque()}`);
console.log(`Valor total do estoque do ${item2.nome}: R$ ${item2.calcularValorEstoque()}`);
