check = true

do {
    let opcion = prompt(`Bienvenido al gimnasio ---, ingrese el numero de la mensualidad que desea pagar \n 1 15 Dias \n 2 30 Dias \n 3 3 Meses \n salir`)
    switch (opcion) {
        case "15 Dias": {
            let Mensualidad1 = 18000
            alert(`El valor de la mensauladidad es de ${Mensualidad1}`)
        }break
        case "30 Dias":{
            let Mensualidad2 = 35000
            alert(`El valor de la mensualidad es de ${Mensualidad2}`)
        }break
        case "3 Meses":{
            let Mensualidad3 = 86000
            alert(`El valor de la mensualidad es de ${Mensualidad3}`)
        }break
        case "salir":{check = false}break
    }
} while (check = true)