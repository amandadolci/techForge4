"use strict";
// Exercício 5:
// Crie uma classe Agenda que tenha um atributo compromissos(array de strings).
// Adicione métodos para adicionar compromissos e listar todos os compromissos.
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
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
// Compromissos:
// 1. Reunião às 10h
// 2. Dentista às 14h
