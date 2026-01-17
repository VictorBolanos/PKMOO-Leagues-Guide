// Pasos del combate para Ninetales de Blue (Kanto)
window.currentBattleSteps = {
    pokemon: 'Ninetales',
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
            type: 'fixed',
            content: 'Entra Rhyperior usar Teleport'
        },
        {
            type: 'expandable',
            trigger: 'Entra Cresselia +1 Paz mental',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Rhyperior se queda',
                    content: [
                        {
                            type: 'expandable',
                            trigger: 'Usar Def X solo si nos hace más de 25% de daño',
                            content: [
                                '+2 Paz mental/Vel X'
                            ]
                        }
                    ]
                },
                {
                    type: 'expandable',
                    trigger: 'Rhyperior se retira',
                    content: [
                        'Boostear hasta tener +2 Paz mental/Vel X'
                    ]
                }
            ]
        }
    ]
};
