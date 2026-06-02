// 1. Datos de los dinosaurios
const dinosaurios = [
    { nombre: "Tyrannosaurus Rex", dieta: "Carnívoro", periodo: "Cretácico", emoji: "🦖", link: null },
    { nombre: "Triceratops", dieta: "Herbívoro", periodo: "Cretácico", emoji: "🦕", link: "triceratops.html" },
    { nombre: "Brachiosaurus", dieta: "Herbívoro", periodo: "Jurásico", emoji: "🦕", link: null },
    { nombre: "Velociraptor", dieta: "Carnívoro", periodo: "Cretácico", emoji: "🦖", link: null }
];

// 2. Renderizar tarjetas dinámicamente
const grid = document.getElementById('dino-grid');

function cargarDinos() {
    dinosaurios.forEach(dino => {
        const card = document.createElement('div');
        card.className = 'card' + (dino.link ? ' card--link' : '');
        card.innerHTML = `
            <div class="card-emoji">${dino.emoji}</div>
            <h3>${dino.nombre}</h3>
            <p><strong>Dieta:</strong> ${dino.dieta}</p>
            <p><strong>Periodo:</strong> ${dino.periodo}</p>
            ${dino.link ? `<a class="card-btn" href="${dino.link}">Ver más →</a>` : '<span class="card-soon">Próximamente</span>'}
        `;
        if (dino.link) {
            card.addEventListener('click', () => window.location.href = dino.link);
        }
        grid.appendChild(card);
    });
}

// 3. Efecto del Header al hacer Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Inicializar
document.addEventListener('DOMContentLoaded', cargarDinos);

function explorar() {
    window.scrollTo({
        top: document.getElementById('galeria').offsetTop - 70,
        behavior: 'smooth'
    });
}