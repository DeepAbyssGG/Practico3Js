let nombreCiudades = [];
do {
  let ciudades = prompt("Ingrese el nombre de ciudades");
  nombreCiudades.push(ciudades);
} while (confirm("¿Quiere escribir mas Ciudades?"));
document.write(`<br>${nombreCiudades}</br>`)

document.write(`<br>Longitud del array: ${nombreCiudades.length}</br>`)

document.write
(`
  <br>Item 1: ${nombreCiudades[0]}</br> 
  <br>Item 3: ${nombreCiudades[2]}</br> 
  <br>Ultimo item: ${nombreCiudades[nombreCiudades.length - 1]}</br> 
`)

nombreCiudades.push('Paris')

document.write(`<br>${nombreCiudades}</br>`)

document.write(`<br>Item 2: ${nombreCiudades[1]}</br>`
)
nombreCiudades[1] = 'Barcelona'

document.write(`<br>${nombreCiudades}</br>`)