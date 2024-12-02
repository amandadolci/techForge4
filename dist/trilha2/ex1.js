"use strict";
// Exercício 1:
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number).
// Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log('O valor do depósito deve ser positivo.');
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente ou valor inválido.');
        }
    }
}
const conta = new ContaBancaria('João', 1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.saldo); // => 1200
