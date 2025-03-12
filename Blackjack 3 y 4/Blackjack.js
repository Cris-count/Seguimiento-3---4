// Array de cartas posibles con sus valores
const cartas = [
    { carta: '2', valor: 2 },
    { carta: '3', valor: 3 },
    { carta: '4', valor: 4 },
    { carta: '5', valor: 5 },
    { carta: '6', valor: 6 },
    { carta: '7', valor: 7 },
    { carta: '8', valor: 8 },
    { carta: '9', valor: 9 },
    { carta: '10', valor: 10 },
    { carta: 'J', valor: 10 },
    { carta: 'Q', valor: 10 },
    { carta: 'K', valor: 10 },
    { carta: 'A', valor: 11 } // El valor del As puede ser 1 o 11, aquí se simplifica a 11
];

// Objeto para almacenar las manos de los jugadores y sus puntajes
const manos = {
    1: [],
    2: [],
    3: []
};

const puntajes = {
    1: 0,
    2: 0,
    3: 0
};

function pedirCarta(jugador) {
    const carta = cartas[Math.floor(Math.random() * cartas.length)];
    manos[jugador].push(carta);
    puntajes[jugador] += carta.valor;
    console.log(`Jugador ${jugador} pidió una carta: ${carta.carta}`);
    console.log(`Mano del Jugador ${jugador}: ${manos[jugador].map(c => c.carta).join(', ')}`);
    console.log(`Puntaje del Jugador ${jugador}: ${puntajes[jugador]}`);
    document.getElementById(`puntos${jugador}`).innerText = `Puntos: ${puntajes[jugador]}`;

    if (puntajes[jugador] > 21) {
        document.getElementById(`puntos${jugador}`).innerText += " - ¡Has perdido!";
        deshabilitarBotones(jugador);
    }
}

function plantarse(jugador) {
    console.log(`Jugador ${jugador} se plantó`);
    console.log(`Mano final del Jugador ${jugador}: ${manos[jugador].map(c => c.carta).join(', ')}`);
    console.log(`Puntaje final del Jugador ${jugador}: ${puntajes[jugador]}`);
    document.getElementById(`puntos${jugador}`).innerText = `Puntos: ${puntajes[jugador]}`;
    deshabilitarBotones(jugador);
    verificarGanador();
}

function deshabilitarBotones(jugador) {
    document.getElementById(`btn${jugador * 2 - 1}`).disabled = true;
    document.getElementById(`btn${jugador * 2}`).disabled = true;
}

function verificarGanador() {
    const jugadores = Object.keys(puntajes);
    const jugadoresActivos = jugadores.filter(jugador => !document.getElementById(`btn${jugador * 2 - 1}`).disabled);
    
    if (jugadoresActivos.length === 0) {
        const jugadoresValidos = jugadores.filter(jugador => puntajes[jugador] <= 21);
        if (jugadoresValidos.length > 0) {
            const ganador = jugadoresValidos.reduce((max, jugador) => puntajes[jugador] > puntajes[max] ? jugador : max, jugadoresValidos[0]);
            document.body.innerHTML += `<p>¡Jugador ${ganador} ha ganado con ${puntajes[ganador]} puntos!</p>`;
        } else {
            document.body.innerHTML += `<p>¡Todos los jugadores se han pasado de 21 puntos!</p>`;
        }
    }
}

function reiniciarPartida() {
    // Reiniciar manos y puntajes
    for (let jugador in manos) {
        manos[jugador] = [];
        puntajes[jugador] = 0;
        document.getElementById(`puntos${jugador}`).innerText = `Puntos: 0`;
    }

    // Habilitar botones
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`btn${i * 2 - 1}`).disabled = false;
        document.getElementById(`btn${i * 2}`).disabled = false;
    }

    // Limpiar mensajes de ganador
    const mensajesGanador = document.querySelectorAll('body > p');
    mensajesGanador.forEach(mensaje => mensaje.remove());
}