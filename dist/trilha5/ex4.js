"use strict";
// 4. Sistema de Votação
// Crie uma classe abstrata VoteSystem que gerencie votos em uma competição.
// Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.
// Crie duas subclasses: Election e Poll.
// Election deve permitir adicionar votos para um candidato específico
// e retornar o total de votos por candidato em um objeto.
// Poll deve retornar uma lista dos candidatos em ordem de votos
// (do mais votado para o menos votado).
class VoteSystem {
    constructor() {
        this.votes = {};
    }
}
class Election extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        const results = {};
        Object.keys(this.votes)
            .sort((a, b) => this.votes[b] - this.votes[a])
            .forEach(candidate => {
            results[candidate] = this.votes[candidate];
        });
        return results;
    }
}
const election = new Election();
election.voteFor('Vini');
election.voteFor('Amanda');
election.voteFor('Vini');
console.log(election.getResults());
const poll = new Poll();
poll.voteFor('Candidato A');
poll.voteFor('Candidato B');
poll.voteFor('Candidato A');
poll.voteFor('Candidato C');
console.log(poll.getResults());
