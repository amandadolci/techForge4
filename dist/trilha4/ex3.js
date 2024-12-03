"use strict";
class Loja {
    constructor(produtos) {
        this.produtos = [];
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const loja = new Loja([
    { codigo: 1, nome: 'Produto A' },
    { codigo: 2, nome: 'Produto B' },
]);
console.log(loja.buscarProdutoPorCodigo(1));
console.log(loja.buscarProdutoPorCodigo(3));
