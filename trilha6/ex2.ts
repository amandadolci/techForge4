// 2. Gerenciamento de Usuários e Notificações
// Implemente uma classe UserManager que gerencie a criação de usuários
// e envie notificações por email.

// Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
// Em seguida, refatore para dividir a responsabilidade de envio de notificação
// em uma classe EmailNotification.
// Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir
// o acoplamento ao injetar EmailNotification na UserManager.
class EmailNotification {
	sendEmail(email: string, subject: string, message: string): void {
		console.log(`Enviando email para: ${email}`);
		console.log(`Assunto: ${subject}`);
		console.log(`Mensagem: ${message}`);
	}
}

class UserManager {
	private users: string[] = [];
	private emailNotification: EmailNotification;

	constructor() {
		this.emailNotification = new EmailNotification();
	}

	createUser(username: string, email: string): void {
		this.users.push(username);
		console.log(`Usuário criado: ${username}`);
		this.emailNotification.sendEmail(email, 'Bem-vindo!', `Olá ${username}, bem-vindo ao sistema!`);
	}

	listUsers(): void {
		console.log('Lista de usuários:', this.users);
	}
}

const userManagerRefatorado = new UserManager();
userManagerRefatorado.createUser('Amanda', 'amanda@mail.com');
userManagerRefatorado.createUser('Vini', 'vini@mail.com');
userManagerRefatorado.listUsers();
