// Mapeo de entrenadores por región
const trainersByRegion = {
    kanto: [
        { name: 'Lorelei', image: 'lorelei.png' },
        { name: 'Bruno', image: 'bruno.png' },
        { name: 'Agatha', image: 'agatha.png' },
        { name: 'Lance', image: 'lance.png' },
        { name: 'Blue', image: 'blue.png' }
    ],
    johto: [
        { name: 'Will', image: 'will.png' },
        { name: 'Koga', image: 'koga.png' },
        { name: 'Bruno', image: 'bruno.png' },
        { name: 'Karen', image: 'karen.png' },
        { name: 'Lance', image: 'lance.png' }
    ],
    hoenn: [
        { name: 'Anis', image: 'anis.png' },
        { name: 'Plubio', image: 'plubio.png' },
        { name: 'Dracon', image: 'dracon.png' },
        { name: 'Sixto', image: 'sixto.png' },
        { name: 'Alecran', image: 'alecran.png' }
    ],
    sinnoh: [
        { name: 'Aza', image: 'aza.png' },
        { name: 'Fatima', image: 'fatima.png' },
        { name: 'Fausto', image: 'fausto.png' },
        { name: 'Lotto', image: 'lotto.png' },
        { name: 'Cynthia', image: 'cynthia.png' }
    ],
    teselia: [
        { name: 'Catleya', image: 'catleya.png' },
        { name: 'Delos', image: 'delos.png' },
        { name: 'Gaia', image: 'gaia.png' },
        { name: 'Mirto', image: 'mirto.png' },
        { name: 'Nivea', image: 'nivea.png' }
    ]
};

// Elementos del DOM
const regionButtons = document.querySelectorAll('.region-btn');
const trainersContainer = document.getElementById('trainersContainer');

// Función para mostrar entrenadores
function showTrainers(region) {
    const trainers = trainersByRegion[region];
    
    // Limpiar contenedor
    trainersContainer.innerHTML = '';
    
    // Remover clase show para animación
    trainersContainer.classList.remove('show');
    
    // Ocultar sección de pokémon líderes
    const leaderSection = document.getElementById('leaderPokemonsSection');
    if (leaderSection) {
        leaderSection.style.display = 'none';
    }
    
    // Crear tarjetas de entrenadores
    trainers.forEach(trainer => {
        const trainerCard = document.createElement('div');
        trainerCard.className = 'trainer-card';
        
        trainerCard.innerHTML = `
            <div class="trainer-image-wrapper">
                <img src="img/trainers/${trainer.image}" alt="${trainer.name}" class="trainer-image">
                <div class="trainer-name">${trainer.name}</div>
            </div>
        `;
        
        // Añadir event listener para mostrar pokémon líderes
        trainerCard.addEventListener('click', () => {
            showLeaderPokemons(trainer.name);
        });
        
        trainersContainer.appendChild(trainerCard);
    });
    
    // Mostrar con animación
    setTimeout(() => {
        trainersContainer.classList.add('show');
    }, 50);
}

// Función para mostrar pokémon líderes del entrenador seleccionado
function showLeaderPokemons(trainerName) {
    const leaderSection = document.getElementById('leaderPokemonsSection');
    const leaderTitle = document.getElementById('leaderPokemonsTitle');
    const leaderContainer = document.getElementById('leaderPokemonsContainer');
    
    if (!leaderSection || !leaderTitle || !leaderContainer) return;
    
    // Actualizar título
    leaderTitle.textContent = `${trainerName} - Pokémons Líder`;
    
    // Limpiar contenedor
    leaderContainer.innerHTML = '';
    
    // Crear 4 tarjetas vacías
    for (let i = 0; i < 4; i++) {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'leader-pokemon-card';
        pokemonCard.innerHTML = `
            <div class="leader-pokemon-image-wrapper">
                <img src="" alt="" class="leader-pokemon-image">
                <div class="leader-pokemon-name">Pokémon ${i + 1}</div>
            </div>
        `;
        
        leaderContainer.appendChild(pokemonCard);
    }
    
    // Mostrar sección con animación
    leaderSection.style.display = 'block';
    setTimeout(() => {
        leaderSection.style.opacity = '1';
        leaderSection.style.transform = 'translateY(0)';
    }, 10);
}

// Event listeners para botones de región
regionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const region = button.getAttribute('data-region');
        
        // Remover clase active de todos los botones
        regionButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        // Mostrar entrenadores de la región
        showTrainers(region);
    });
});

// Mostrar Kanto por defecto al cargar
window.addEventListener('DOMContentLoaded', () => {
    const kantoButton = document.querySelector('[data-region="kanto"]');
    if (kantoButton) {
        kantoButton.classList.add('active');
        showTrainers('kanto');
    }
});

// Desplegable Equipo
const teamToggle = document.getElementById('teamToggle');
const teamContent = document.getElementById('teamContent');

if (teamToggle && teamContent) {
    teamToggle.addEventListener('click', () => {
        teamToggle.classList.toggle('active');
        teamContent.classList.toggle('show');
    });
}

// Desplegable Inicio del Combate
const battleStartToggle = document.getElementById('battleStartToggle');
const battleStartContent = document.getElementById('battleStartContent');

if (battleStartToggle && battleStartContent) {
    battleStartToggle.addEventListener('click', () => {
        battleStartToggle.classList.toggle('active');
        battleStartContent.classList.toggle('show');
    });
}
