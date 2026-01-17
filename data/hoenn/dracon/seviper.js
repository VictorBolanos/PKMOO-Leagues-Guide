// Pasos del combate para Seviper de Dracon (Hoenn)
window.currentBattleSteps = {
    pokemon: 'Seviper',
    steps: [
        {
            type: 'fixed',
            content: 'Pantalla luz y luego Reflejo'
        },
        {
            type: 'expandable',
            trigger: 'Cambiar a Blissey',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Si entra Gallade cambiar a Volcarona +3',
                    content: [
                        {
                            type: 'expandable',
                            trigger: 'Si cambia a Salamence después de Gallade',
                            content: [
                                'Volcarona +4'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
