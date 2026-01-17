// Pasos del combate para Nidoqueen de Catleya (Teselia)
window.currentBattleSteps = {
    pokemon: 'Nidoqueen',
    steps: [
        {
            type: 'fixed',
            content: 'Pantalla luz y luego Reflejo'
        },
        {
            type: 'fixed',
            content: 'Cambiar a Blissey usar Trampas'
        },
        {
            type: 'expandable',
            trigger: 'Entra Metagross, usar Teleport no importa si muere Blissey',
            content: []
        },
        {
            type: 'fixed',
            content: 'Entra Volcarona +3'
        }
    ]
};
