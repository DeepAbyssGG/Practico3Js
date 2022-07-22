let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.write(`<ul>`)
for(let index = 0; index < meses.length; index++){
    document.write(`<li>${meses[index]}</li>`)
}
document.write(`</ul>`)