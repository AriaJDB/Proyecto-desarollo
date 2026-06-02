const dinosaurios = [
    { nombre: "Tyrannosaurus Rex", dieta: "Carnívoro", periodo: "Cretácico", link: null },
    { nombre: "Triceratops", dieta: "Herbívoro", periodo: "Cretácico", link: null },
    { nombre: "Brachiosaurus", dieta: "Herbívoro", periodo: "Jurásico", link: "brachiosaurus.html" },
    { nombre: "Velociraptor", dieta: "Carnívoro", periodo: "Cretácico", link: null }
];

const grid = document.getElementById('dino-grid');

function cargarDinos() {
    dinosaurios.forEach(dino => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${dino.nombre}</h3>
            <p><strong>Dieta:</strong> ${dino.dieta}</p>
            <p><strong>Periodo:</strong> ${dino.periodo}</p>
            ${dino.link ? '<p class="ver-mas">🦕 Ver más →</p>' : ''}
        `;
        if (dino.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = dino.link;
            });
        }
        grid.appendChild(card);
    });
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', cargarDinos);

function explorar() {
    window.scrollTo({
        top: document.getElementById('galeria').offsetTop - 70,
        behavior: 'smooth'
    });
}