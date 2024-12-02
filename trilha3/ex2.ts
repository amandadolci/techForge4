// Exercício 2:
// Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea().
// Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea()
// para calcular a área de suas respectivas formas geométricas.
// Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica
// e imprima a área de cada uma.
abstract class FiguraGeometrica {
	abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
	constructor(private raio: number) {
		super();
	}

	calcularArea(): number {
		return Math.PI * this.raio ** 2;
	}
}

class Quadrado extends FiguraGeometrica {
	constructor(private lado: number) {
		super();
	}

	calcularArea(): number {
		return this.lado ** 2;
	}
}

class Triangulo extends FiguraGeometrica {
	constructor(private base: number, private altura: number) {
		super();
	}

	calcularArea(): number {
		return (this.base * this.altura) / 2;
	}
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
	figuras.forEach(figura => {
		console.log(`Área: ${figura.calcularArea()}`);
	});
}

const formas = [new Circulo(5), new Quadrado(4), new Triangulo(3, 6)];

imprimirAreas(formas);
