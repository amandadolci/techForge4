// Exercício 5:
// Crie uma classe Agenda que tenha um atributo compromissos(array de strings).
// Adicione métodos para adicionar compromissos e listar todos os compromissos.
class Agenda {
	compromissos: string[];

	constructor() {
		this.compromissos = [];
	}

	adicionarCompromisso(compromisso: string): void {
		this.compromissos.push(compromisso);
	}

	listarCompromissos(): void {
		console.log('Compromissos:');
		this.compromissos.forEach((compromisso, index) => {
			console.log(`${index + 1}. ${compromisso}`);
		});
	}
}

const agenda = new Agenda();
agenda.adicionarCompromisso('Reunião às 10h');
agenda.adicionarCompromisso('Dentista às 14h');
agenda.listarCompromissos();
