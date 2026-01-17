// Pasos del combate para Nidoqueen de Nivea (Hoenn)
window.currentBattleSteps = {
    pokemon: 'Nidoqueen',
    steps: [
        {
            type: 'fixed',
            content: 'Pantalla luz y luego Reflejo'
        },
        {
            type: 'expandable',
            trigger: 'Cambiar a Blissey usar Trampas',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Entra Metagross usar Mov sismico',
                    content: [
                        'Cambiar a Volcarona +3'
                    ]
                }
            ]
        }
    ]
};
