let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  let suma = dado1 + dado2;
  sumas.push(suma);
  pruebaDado1.push(dado1);
  pruebaDado2.push(dado2);
}

document.write("<br>resultado del primer dado</br>" + pruebaDado1);
document.write("<br>resultado del segundo dado</br>" + pruebaDado2);
document.write("<br>resultado de la suma</br>" + sumas);
let contador = 0
document.write(`<table>
<tbody>
<tr> <td>Resultado</td> <td>Frecuencia</td> </tr>
`);
for (let resultado = 2; resultado <= 12; resultado++) {
  for(let posicion = 0; posicion < sumas.length; posicion++){
    if(resultado === sumas[posicion]){
        // sumar las apariciones
        contador++
    }
  }
  document.write(`<tr> <td>${resultado}</td> <td>${contador}</td> </tr>`);
  contador = 0
}

document.write(`</tbody></table>`);