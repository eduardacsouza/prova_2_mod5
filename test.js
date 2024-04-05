const { Fila, RoboDeLimpeza } = require('./robo');

describe('Teste da Fila', () => {
    test('enfileirar e desenfileirar', () => {
        const fila = new Fila();
        fila.enfileirar('tarefa1');
        fila.enfileirar('tarefa2');
        expect(fila.desenfileirar()).toBe('tarefa1');
        expect(fila.desenfileirar()).toBe('tarefa2');
        expect(fila.vazia()).toBe(true);
    });
});

describe('RoboDeLimpeza', () => {
    test('Adicionar tarefa e executar próxima tarefa', () => {
        const robo = new RoboDeLimpeza();
        robo.adicionarTarefa('limpar sala');
        robo.adicionarTarefa('limpar cozinha');
        expect(robo.executarProximaTarefa()).toBe('limpar sala');
        expect(robo.executarProximaTarefa()).toBe('limpar cozinha');
        expect(() => { robo.executarProximaTarefa() }).toThrow('A fila de tarefas está vazia.');
    });

    test('Executar todas as tarefas', () => {
        const robo = new RoboDeLimpeza();
        robo.adicionarTarefa('limpar sala');
        robo.adicionarTarefa('limpar cozinha');
        const tarefasExecutadas = robo.executarTodasTarefas();
        expect(tarefasExecutadas).toEqual(['limpar sala', 'limpar cozinha']);
        expect(robo.filaDeTarefas.vazia()).toBe(true);
    });
});

