do {
    let opcion = prompt(`Ingrese \n1. para ingresar el modelo de su carro \n2. para salir`);
    switch(opcion) {
        case "1":
            let modeloDefectuoso = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
            let numeroModelo = Number(prompt("Ingrese el numero de modelo de su carro"))
            if (modeloDefectuoso){
                alert("El automovil esta defectuoso, llevar a garantia");
            }else {
                alert("su carro no esta defectuoso");
            }break
        case "2":{
            alert("Gracias por usar nuestro servicio");
            break;
        }
    }
}while (opcion != 2)