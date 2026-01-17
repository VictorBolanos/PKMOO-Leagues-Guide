// Pasos del combate para Feraligatr de Lance (Kanto)
window.currentBattleSteps = {
    pokemon: 'Feraligatr',
    steps: [
        {
            type: 'expandable',
            trigger: 'Reflejo y luego Pantalla luz',
            content: [
                'Usamos Otra vez y dejamos que muera el Sableye'
            ]
        },
        {
            type: 'expandable',
            trigger: 'Entra Blissey usamos Trampas',
            content: [
                'Usamos Mov sismico y dejamos que muera Blissey'
            ]
        },
        {
            type: 'expandable',
            trigger: 'Entra Serperior usamos Llueve hojas',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Pulso Dragón contra Charizard',
                    content: [
                        {
                            type: 'expandable',
                            trigger: 'Lance cambia a Charizard y entra Dragonite',
                            content: [
                                'Lluevehojas contra el dragonite debilitado por el Pulso Dragón'
                            ]
                        },
                        'Rematar a Charizard con Lluevehojas'
                    ]
                }
            ]
        }
    ]
};
