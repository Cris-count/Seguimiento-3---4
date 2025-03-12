let check = true

while (check){
    alert(`Ingrese \n 1. para pedir una lavadora \n 2. para salir`);

    let opcion = parseInt(prompt(`Ingrece una opcion`))

    let tipo = Number(prompt("Tipo de lavadoras 1. lavadora Grande, 2. lavadora Pequeña"))

    let cantidad = Number(prompt("Cantidad de lavadoras"))

    let horas = Number(prompt("Horas de uso"))
    
    switch (opcion) {
        case 1: if (tipo == 1 && cantidad <= 2) {
            let sumar = horas * 4000 * cantidad
            alert(`Costo por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas es de ${sumar}`)
        } else if (cantidad >= 3 && tipo == 1) {
            let sumar1 = horas * 4000 * cantidad
            let Descuento = sumar1 * 0.03
            let TotalconDescuento = sumar1 - Descuento
            alert(`Costo por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas es de ${TotalconDescuento}`)
        } else if (tipo == 2 && cantidad <= 2) {
            let sumar2 = horas * 3000 * cantidad
            alert(`Costo por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas es de ${sumar2}`)
        } else if (cantidad >= 3 && tipo == 2) {
            let sumar3 = horas * 3000 * cantidad
            let Descuento1 = sumar3 * 0.03
            let TotalconDescuento1 = sumar3 - Descuento1
            alert(`Costo por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas es de ${TotalconDescuento1}`)
        }default:{
            alert(`Los valores establecidos no son correctos`)
        }
        break
        case 2: check=false; break
    }
}