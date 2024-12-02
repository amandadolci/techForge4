"use strict";
// Exercício 2:
// Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea().
// Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea()
// para calcular a área de suas respectivas formas geométricas.
// Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica
// e imprima a área de cada uma.
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach(figura => {
        console.log(`Área: ${figura.calcularArea()}`);
    });
}
const formas = [new Circulo(5), new Quadrado(4), new Triangulo(3, 6)];
imprimirAreas(formas);
