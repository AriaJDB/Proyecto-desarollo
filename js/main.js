// 1. Datos de los dinosaurios
const dinosaurios = [
    { nombre: "Tyrannosaurus Rex", dieta: "Carnívoro", periodo: "Cretácico" },
    { nombre: "Triceratops", dieta: "Herbívoro", periodo: "Cretácico" },
    { nombre: "Brachiosaurus", dieta: "Herbívoro", periodo: "Jurásico" },
    { nombre: "Velociraptor", dieta: "Carnívoro", periodo: "Cretácico" }
];

// 2. Renderizar tarjetas dinámicamente
const grid = document.getElementById('dino-grid');

function cargarDinos() {
    dinosaurios.forEach(dino => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${dino.nombre}</h3>
            <p><strong>Dieta:</strong> ${dino.dieta}</p>
            <p><strong>Periodo:</strong> ${dino.periodo}</p>
        `;
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