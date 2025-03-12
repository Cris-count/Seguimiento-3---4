let check = false

while(check != true){
    alert(`Ingresa \n 1. para ingresar numeros pares \n 2 salir`)
    let opcion = parseInt(prompt(`Ingrece un numero`))
    switch(opcion){
        case 1: {
            let numero = parseInt(prompt(`Ingrese nuemero`))
            if (numero % 2 == 0){
                alert(`El numero ${numero} es par`)
            }else {
                alert(`El nuemro ${numero} es impar`)
            }
        }
        break
        case 2: check = true; break
    }
}