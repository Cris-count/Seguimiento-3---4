let check = false

do {
    alert(`Ingrese \n 1. Numeros \n 2. salir`)
    let opcion = Number(prompt(`Ingrese opcion`))
    switch (opcion) {
        case 1: {
            let Numero1 = prompt("Ingrese un número")
            let Numero2 = prompt("Ingrese otro número")
            let Numero3 = prompt("Ingrese otro número")

            let Mayor = Math.max(Numero1, Numero2, Numero3)

            alert(`El número mayor es ${Mayor}`)
        }break
        case 2: check = true
    }
}while(check = false)