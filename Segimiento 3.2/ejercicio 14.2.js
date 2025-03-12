let tamaño, costoSandwich;

do {
    tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande)").toLowerCase();

    if (tamaño === "pequeño") {
        costoSandwich = 6000;
    } else if (tamaño === "grande") {
        costoSandwich = 12000;
    } else {
        alert("Tamaño no válido. Por favor, intente de nuevo.<br>");
        costoSandwich = null;
    }
} while (costoSandwich === null);

let ingredientes = prompt("Ingrese los ingredientes adicionales separados por comas (tocineta, jalapeño, pavo, queso)").toLowerCase().split(",");
let costoIngredientes = 0;

ingredientes.forEach(ingrediente => {
    if (ingrediente.trim() === "tocineta" || ingrediente.trim() === "pavo") {
        costoIngredientes += 3000;
    } else if (ingrediente.trim() === "queso") {
        costoIngredientes += 2500;
    }
});

let costoTotal = costoSandwich + costoIngredientes;
alert(`El costo total del sándwich es: $${costoTotal}`);