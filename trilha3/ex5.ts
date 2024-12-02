// Exercício 5:
// Crie uma classe abstrata Funcionario com atributos encapsulados nome,
// salario e um método abstrato calcularBonus().Crie subclasses Gerente e Operario.
// O Gerente tem um bônus de 10 % sobre o salário, e o Operario tem um bônus de 5 %.
// Crie uma função calcularSalarioComBonus() que aceite um array de funcionários
// e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
abstract class Funcionario {
	constructor(private nome: string, private salario: number) {}

	getSalario(): number {
		return this.salario;
	}

	abstract calcularBonus(): number;

	calcularSalarioComBonus(): number {
		return this.salario + this.calcularBonus();
	}

	getNome(): string {
		return this.nome;
	}
}

class Gerente extends Funcionario {
	calcularBonus(): number {
		return this.getSalario() * 0.1;
	}
}

class Operario extends Funcionario {
	calcularBonus(): number {
		return this.getSalario() * 0.05;
	}
}

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
	funcionarios.forEach(funcionario => {
		console.log(`${funcionario.getNome()}: salário R$${funcionario.calcularSalarioComBonus()}`);
	});
}

const gerente = new Gerente('João', 5000);
const operario = new Operario('Maria', 2000);

calcularSalariosComBonus([gerente, operario]);
// João: Salário Final = 5500
// Maria: Salário Final = 2100
