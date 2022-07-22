function tabla(numeroX){
    document.write(`<h2>Tabla del 1 a 10 del numero ${numeroX}<h2>`)
    document.write(`<table> <tbody>
    <tr>`)
    for(let i = 1; i <= 10; i++){
        document.write(`<td>${numeroX}*${i}=${numeroX * i}</td>`)
    }
    document.write(`</tr>
    </tbody> </table>`)
}
let numero = parseInt(prompt('Ingrese un numero'))
tabla(numero)