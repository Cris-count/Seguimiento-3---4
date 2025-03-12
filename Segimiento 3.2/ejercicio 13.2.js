let operador, minutosInternacionales, cargoFijo, valorMinuto, valorPaqueteDatos;

do {
    operador = prompt("Ingrese su operador (claro, tigo, movistar)").toLowerCase();
    minutosInternacionales = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos"));

    if (operador === "tigo") {
        cargoFijo = 45000;
        valorMinuto = 200;
        valorPaqueteDatos = 12000;
    } else if (operador === "claro") {
        cargoFijo = 30000;
        valorMinuto = 100;
        valorPaqueteDatos = 18000;
    } else if (operador === "movistar") {
        cargoFijo = 40000;
        valorMinuto = 250;
        valorPaqueteDatos = 8000;
    } else {
        alert("Operador no válido. Por favor, intente de nuevo.<br>");
        cargoFijo = null;
    }
} while (cargoFijo === null);

let costoTotal = cargoFijo + (valorMinuto * minutosInternacionales) + valorPaqueteDatos;
alert(`El costo total es: $${costoTotal}`);