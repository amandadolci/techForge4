// Exercício 4:
// Crie uma classe Animal com um atributo privado energia e um método comer()
// que aumenta a energia.Crie subclasses Leao e Passaro, onde Leao usa o método comer()
// para caçar(gasta energia primeiro e depois recupera) e Passaro usa comer()
// para se alimentar(só aumenta energia).Crie um método statusEnergia()
// que exibe o nível de energia do animal.
// Use polimorfismo para chamar esses métodos para diferentes animais.
class Animal {
	private energia: number = 0;

	comer(quantidade: number): void {
		this.energia += quantidade;
	}

	statusEnergia(): void {
		console.log(`Energia: ${this.energia}`);
	}
}

class Leao extends Animal {
	comer(quantidade: number): void {
		console.log('O leão está caçando...');
		super.comer(quantidade - 10);
		console.log('O leão está comendo...');
		super.comer(quantidade);
	}
}

class Passaro extends Animal {
	comer(quantidade: number): void {
		console.log('O pássaro está comendo...');
		super.comer(quantidade);
	}
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer(20);
leao.statusEnergia();

passaro.comer(15);
passaro.statusEnergia();
