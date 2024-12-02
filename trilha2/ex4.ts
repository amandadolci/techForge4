// Exercício 4:
// Crie uma classe Temperatura com um atributo valor(number em Celsius).
// Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
	valor: number;

	constructor(valor: number) {
		this.valor = valor;
	}

	conversorFahrenheit(): number {
		return (this.valor * 9) / 5 + 32;
	}

	conversorKelvin(): number {
		return this.valor + 273.15;
	}
}

const temp = new Temperatura(25);
console.log(temp.conversorFahrenheit());
console.log(temp.conversorKelvin());
