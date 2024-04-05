const express = require('express');
const { RoboDeLimpeza } = require('./robo');

const app = express();
const robo = new RoboDeLimpeza();

// Rota para acionar o endpoint /executar_todas_tarefas
app.get('/executar_todas_tarefas', (req, res) => {
    if (robo.filaDeTarefas.vazia()) {
        return res.status(204).json({
            mensagem: "Não há tarefas pendentes a serem executadas",
            tarefasExecutadas: []
        });
    }

    const tarefasExecutadas = robo.executarTodasTarefas();
    res.status(200).json({
        mensagem: "Todas as tarefas foram executadas com sucesso.",
        tarefasExecutadas: tarefasExecutadas
    });
});

