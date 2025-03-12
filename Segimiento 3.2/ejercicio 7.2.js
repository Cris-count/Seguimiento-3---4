let check = false

do {
    let opcion = prompt(`Cual es tu genero \n Masculino \n Femenino \n salir`)
    switch (opcion) {
        case "Masculino": {
            let Genero = "Masculino"
            if (Genero == "Masculino") {
                let ayuda = 40000
                alert(`El valor de ayuda mensual es de ${ayuda}`)
            }
        } break
        case "Femenino": {
            let Edad = prompt("Cual es tu edad?")
            let Genero = "Femenino"
            if (Genero == "Femenino" && Edad <= 29) {
                ayuda = 0
                alert(`El valor de ayuda mensual es de ${ayuda}`)
            } else if (Genero == "Femenino" && Edad >= 30 && Edad <= 49) {
                let ayuda = 100000
                alert(`El valor de ayuda mensual es de ${ayuda}`)
            } else if (Genero == "Femenino" && Edad >= 50) {
                let ayuda = 120000
                alert(`El valor de ayuda mensual es de ${ayuda}`)
            }
        } break
        case "salir": {check = false} break
    }
} while (check = true)