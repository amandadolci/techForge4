"use strict";
// 3. Sistema de Envio de Emails e Validação de Contato
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
// Implemente a validação e o envio de email na mesma classe.
// Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
// Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.
class ContactValidator {
    validate(contact) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(contact);
    }
}
class EmailSender {
    constructor(validator) {
        this.validator = validator;
    }
    sendEmail(contact, subject, message) {
        if (this.validator.validate(contact)) {
            console.log(`Enviando e-mail para: ${contact}`);
            console.log(`Assunto: ${subject}`);
            console.log(`Mensagem: ${message}`);
        }
        else {
            console.log(`Contato inválido: ${contact}`);
        }
    }
}
const contactValidator = new ContactValidator();
const emailSenderRefatorado = new EmailSender(contactValidator);
emailSenderRefatorado.sendEmail('amanda@mail.com', 'Bem vinda', 'Olá, Amanda. Bem vinda!');
emailSenderRefatorado.sendEmail('vini@mail.com', 'Bem vindo', 'Olá, Vini. Bem vindo!');
