// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas.
// Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de
// todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos
abstract class TaskManager {
	protected tasks: Set<string>;

	constructor() {
		this.tasks = new Set();
	}

	abstract addTask(task: string): void;
	abstract listTasks(): string[];
}

class Project extends TaskManager {
	addTask(task: string): void {
		this.tasks.add(`Projeto: ${task}`);
	}

	listTasks(): string[] {
		return Array.from(this.tasks);
	}
}

class DailyTasks extends TaskManager {
	addTask(task: string): void {
		this.tasks.add(`Tarefa: ${task}`);
	}

	listTasks(): string[] {
		return Array.from(this.tasks);
	}
}

const projeto = new Project();
projeto.addTask('Implementar autenticação');
projeto.addTask('Revisar código');
console.log(projeto.listTasks());

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask('Lavar louça');
tarefasDiarias.addTask('Estudar TypeScript');
console.log(tarefasDiarias.listTasks());
