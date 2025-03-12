do{
    let opcion = prompt(`\n 1. calcular angulo \n 2. salir`)
    switch(opcion){
        case "calcular angulo": {
            let Angulo1 = Number(prompt("Ingrese primer valor: "))
            let Angulo2 = Number(prompt("Ingrese segundo valor: "))
            let Angulo3 = Number(prompt("Ingrese tercer valor: "))
            let sumar = Angulo1 + Angulo2 + Angulo3
            if (sumar == 180){
                alert(`la suma de los angulos es igual a ${sumar}, es un Triangulo`)
            } else if (sumar != 180){
                alert(`la suma de los angulos es igual a ${sumar}, no es un Triangulo`)
            }
        } break
        case "salir": {check = false} break
    }
}while (check = true)