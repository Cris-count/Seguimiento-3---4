do {
    let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (si/no)").toLowerCase();
    let discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();
    let check = true;
    if (emitePitido === "si" && discoGira === "si") {
        alert("Póngase en contacto con el técnico de apoyo");
    } else if (emitePitido === "si" && discoGira === "no") {
        alert("Verificar contactos de la unidad");
    } else if (emitePitido === "no" && discoGira === "no") {
        alert("Traiga la computadora para repararla en la central");
    } else if (emitePitido === "no" && discoGira === "si") {
        alert("Compruebe las conexiones de altavoces");
    } else {
        alert("Entrada no válida. Por favor, responda 'si' o 'no'.");
        check = false;
    }
    let continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
    if (continuar === "no") {
        check = false;
    }
} while (check)