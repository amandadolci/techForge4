"use strict";
// Exercício 4:
// Crie uma classe Temperatura com um atributo valor(number em Celsius).
// Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    conversorFahrenheit() {
        return (this.valor * 9) / 5 + 32;
    }
    conversorKelvin() {
        return this.valor + 273.15;
    }
}
const temp = new Temperatura(25);
console.log(temp.conversorFahrenheit());
console.log(temp.conversorKelvin());
