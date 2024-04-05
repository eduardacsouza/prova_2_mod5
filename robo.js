class Fila {
    constructor() {
        this.items = [];
    }

    enfileirar(item) {
        this.items.push(item);
    }

    desenfileirar() {
        return this.items.shift();
    }

    vazia() {
        return this.items.length === 0;
    }
}

class RoboDeLimpeza {
    constructor() {
        this.filaDeTarefas = new Fila();
    }

    adicionarTarefa(tarefa) {
        this.filaDeTarefas.enfileirar(tarefa);
    }

    executarProximaTarefa() {
        if (this.filaDeTarefas.vazia()) {
            throw new Error("A fila de tarefas está vazia.");
        }
        const tarefa = this.filaDeTarefas.desenfileirar();
        console.log(tarefa);
        return tarefa;
    }

    executarTodasTarefas() {
        const tarefasExecutadas = [];
        while (!this.filaDeTarefas.vazia()) {
            const tarefa = this.filaDeTarefas.desenfileirar();
            tarefasExecutadas.push(tarefa);
            console.log(`Tarefa executada: ${tarefa}`);
        }
        return tarefasExecutadas;
    }
}

module.exports = { Fila, RoboDeLimpeza };
