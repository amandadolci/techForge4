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
        if (valor < 0) {
            console.log('Valor inválido.');
        }
        else if (valor > this.saldo) {
            console.log('Saldo insuficiente.');
        }
        else {
            this.saldo -= valor;
        }
    }
}
const conta = new ContaBancaria('Amanda', 1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.saldo);
