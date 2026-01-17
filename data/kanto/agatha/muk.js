// Pasos del combate para Muk de Agatha (Kanto)
window.currentBattleSteps = {
    pokemon: 'Muk',
    steps: [
        {
            type: 'fixed',
            content: 'Reflejo y luego Pantalla luz'
        },
        {
            type: 'fixed',
            content: 'Cambiar a Blissey usar Trampas'
        },
        {
            type: 'expandable',
            trigger: 'Cambiar a Cresselia Def X/+3 Paz mental/Vel X',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Si nos envenenan usar antídoto',
                    content: []
                }
            ]
        }
    ]
};
