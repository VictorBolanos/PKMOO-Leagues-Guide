// Pasos del combate para Swampert de Plubio (Hoenn)
window.currentBattleSteps = {
    pokemon: 'Swampert',
    steps: [
        {
            type: 'expandable',
            trigger: 'Reflejo',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Si usa Puño hielo usar Otra vez para dejarlo encerrado',
                    content: []
                },
                'Pantalla luz'
            ]
        },
        {
            type: 'expandable',
            trigger: 'Cambiar a Blissey (100% PS) usar Trampas',
            content: [
                {
                    type: 'expandable',
                    trigger: 'Blissey muere antes de usar las Trampas',
                    content: [
                        {
                            type: 'expandable',
                            trigger: 'Entra Volcarona +1, sacará a Gyarados',
                            content: [
                                'Usar Psíquico hasta matarlo',
                                {
                                    type: 'expandable',
                                    trigger: 'Según la vida de Volcarona',
                                    content: [
                                        {
                                            type: 'expandable',
                                            trigger: '+60% (falló la roca afilada) Volcarona usa otra Danza aleteo',
                                            content: []
                                        },
                                        {
                                            type: 'expandable',
                                            trigger: '30-60% atacamos con lo más eficaz a todo hasta morir',
                                            content: [
                                                {
                                                    type: 'expandable',
                                                    trigger: 'Volcarona muere quedando 2 turnos de pantallas sacamos a Scrafty +2',
                                                    content: [
                                                        'Puño drenaje a todo y A Bocajarro contra Registeel'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
