function minusOmayus(texto){
    if(texto === texto.toUpperCase()){
        document.write('La cadena de texto esta formada unicamente por Mayusculas')
    }else if(texto === texto.toLowerCase()){
        document.write('La cadena de texto esta formada unicamente por Minusculas')
    }else{
        document.write('La cadena de texto esta formada por Mayusculas y Minusculas')
    }
}
let frase = prompt('Ingrese una cadena de texto')
minusOmayus(frase)