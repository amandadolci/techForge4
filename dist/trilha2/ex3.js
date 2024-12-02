"use strict";
// Exercício 3:
// Crie uma classe Produto com os atributos nome(string), preço(number) e quantidade(number).
// Adicione um método para calcular o valor total em estoque(preço * quantidade).
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }
}
const produto = new Produto('Notebook', 2500, 5);
console.log(produto.calcularValorEstoque());
