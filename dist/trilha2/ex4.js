"use strict";
// Exercício 4:
// Crie uma classe Temperatura com um atributo valor(number em Celsius).
// Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return (this.valor * 9) / 5 + 32;
    }
    paraKelvin() {
        return this.valor + 273.15;
    }
}
const temp = new Temperatura(25);
console.log(temp.paraFahrenheit()); // => 77
console.log(temp.paraKelvin()); // => 298.15
