let check = false

do {
    alert(`Ingrese \n 1. promedio notas \n 2. salir`)
    let opcion = Number(prompt(`Ingrese opcion`))
    switch (opcion) {
        case 1:
            let Física = Number(prompt("Ingrese la nota de Física del 0 - 10 puntos"))
            let Química = Number(prompt("Ingrese la nota de Química del 0 - 10 puntos"))
            let Biología = Number(prompt("Ingrese la nota de Biología del 0 - 10 puntos"))
            let Matemáticas = Number(prompt("Ingrese la nota de Matemáticas del 0 - 10 puntos"))
            let Informáticac = Number(prompt("Ingrese la nota de Informática del 0 - 10 puntos"))

            let sumar = Física + Química + Biología + Matemáticas + Informáticac

            let Promedio = (sumar / 50) * 100

            if (Promedio >= 0 && Promedio <= 59.9) {
                let calificacion = "Mala"
                alert(`tu Promedio es del ${Promedio}% y tu calificación es ${calificacion}`)
            } else if (Promedio >= 60 && Promedio <= 79.9) {
                let calificacion1 = "Buena"
                alert(`tu Promedio es del ${Promedio}% y tu calificación es ${calificacion1}`)
            } else if (Promedio >= 80 && Promedio <= 100) {
                let calificacion2 = "Excelente"
                alert(`tu Promedio es del ${Promedio}% y tu calificación es ${calificacion2}`)
            }
        case 2: check = true
    }
} while (check = false)