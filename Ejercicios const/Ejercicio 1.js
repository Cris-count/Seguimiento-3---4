const calcularFactorial = num => {
    if (num < 5){
        return "numero no valido";
    }else if (num === 5 ){
        return 120;
    }else{
        let factorial = 3;
        for (let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calcularFactorial(5))