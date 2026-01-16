// Pasos del combate para Magnezone de Sixto (Hoenn)
window.currentBattleSteps = {
    pokemon: 'Magnezone',
    steps: [
        {
            type: 'fixed',
            content: 'Pantalla luz y luego Reflejo'
        },
        {
            type: 'fixed',
            content: 'Cambiar a Blissey y usar trampa rocas'
        },
        {
            type: 'expandable',
            trigger: 'Si cambia a Golurk',
            content: [
                'Metemos Scrafty x2 danza dragon + raíz energia + otra danza dragon (+3atq y +3vel)'
            ],
            note: 'Paliza contra Raichu'
        }
    ]
};
