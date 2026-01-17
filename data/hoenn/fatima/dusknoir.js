// Pasos del combate para Dusknoir de Fátima (Hoenn)
window.currentBattleSteps = {
    pokemon: 'Dusknoir',
    steps: [
        {
            type: 'fixed',
            content: 'Reflejo y luego Pantalla luz'
        },
        {
            type: 'expandable',
            trigger: 'Cambiar a Blissey usar Trampas',
            content: [
                'Si queda viva usar Teleport a Scrafty'
            ]
        },
        {
            type: 'expandable',
            trigger: 'Scrafty +2, entra Mandibuzz',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Si muere Blissey, Scrafty +3 usar Puño drenaje para curarnos',
                    content: []
                }
            ]
        }
    ]
};
