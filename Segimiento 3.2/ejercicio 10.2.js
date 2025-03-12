do {
    let opcion = prompt(`\n 1. Copias a imprimir \n 2. salir`)
    switch (opcion) {
        case "Copias a imprimir": {
            let numeroCopias = Number(prompt("Ingrese el número de copias que desea imprimir"));
            if (numeroCopias >= 0 && numeroCopias <= 499) {
                let precioPorCopia = 120
                let precioTotal = precioPorCopia * numeroCopias
                alert(`total a pagar es de ${precioTotal}`)
            } else if (numeroCopias >= 500 && numeroCopias <= 749) {
                let precioPorCopia = 100
                let precioTotal = precioPorCopia * numeroCopias
                alert(`total a pagar es de ${precioTotal}`)
            } else if (numeroCopias >= 750 && numeroCopias <= 999) {
                let precioPorCopia = 80
                let precioTotal = precioPorCopia * numeroCopias
                alert(`total a pagar es de ${precioTotal}`)
            } else if (numeroCopias >= 1000) {
                let precioPorCopia = 50
                let precioTotal = precioPorCopia * numeroCopias
                alert(`total a pagar es de ${precioTotal}`)
            }
        } break
        case "salir": {
            check = false
        }
    }
} while (check = true)