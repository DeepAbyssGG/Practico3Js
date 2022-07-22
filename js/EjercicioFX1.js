function parOimpar(numeroEntero){
    if(numeroEntero % 2 == 0 ){
        document.write(`${numeroEntero} es un numero par`)
    }else{
        document.write(`${numeroEntero} NO es un numero par`)
    }
}
let numeroX = parseInt(prompt('Escriba un numero entero'))
parOimpar(numeroX)