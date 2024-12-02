"use strict";
// Exercício 5:
// Crie uma classe abstrata Funcionario com atributos encapsulados nome,
// salario e um método abstrato calcularBonus().Crie subclasses Gerente e Operario.
// O Gerente tem um bônus de 10 % sobre o salário, e o Operario tem um bônus de 5 %.
// Crie uma função calcularSalarioComBonus() que aceite um array de funcionários
// e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    calcularSalarioComBonus() {
        return this.salario + this.calcularBonus();
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalariosComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        console.log(`${funcionario.getNome()}: salário R$${funcionario.calcularSalarioComBonus()}`);
    });
}
const gerente = new Gerente('João', 5000);
const operario = new Operario('Maria', 2000);
calcularSalariosComBonus([gerente, operario]);
