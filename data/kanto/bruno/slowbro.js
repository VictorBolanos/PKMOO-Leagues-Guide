// Pasos del combate para Slowbro de Bruno (Kanto)
window.currentBattleSteps = {
    pokemon: 'Slowbro',
    steps: [
        {
            type: 'fixed',
            content: 'Pantalla luz y luego Reflejo'
        },
        {
            type: 'fixed',
            content: 'Cambia a Blissey usa Trampa rocas'
        },
        {
            type: 'expandable',
            trigger: 'Entra Aggron cambiar a Cresselia +1 Paz mental',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Entra Salamence usar Paz mental de nuevo +Vel X',
                    content: [
                        'Entra Slowbro usar otro Paz mental'
                    ]
                }
            ]
        }
    ]
};
