let check = false
let valorHoras = 30000

while(check != true){
    alert(`Consulte pago por horas lavorales, \n 1. si trabajo menos de 10 horas. \n 2. s trabajo mas de 10 Horas. \n 3. para salir`)
    let opcion = Number(prompt(`Ingrece la opcion`))
    switch(opcion){
        case 1: {
            let Nombre = prompt(`Ingrese su nombre`)
            let Horas = prompt(`Ingrese horas de trabajo`)
            alert(`Bienvenido ${Nombre}, lavuro ${Horas}, su pago es de ${valorHoras*Horas}`)
        }
        break
        case 2: {
            let Nombre = prompt(`Ingrese su nombre`)
            let Horas = prompt(`Ingrese horas de trabajo`)
            alert(`Bienvenido ${Nombre}, lavuro ${Horas}, su pago es de ${33000*Horas}`)
        }
        break
        case 3: check=true; break;
    }
}
