// 8:En un hospital existen tres áreas: Psiquiatría, Pediatría, Traumatología. El presupuesto
// anual del hospital se reparte a estas tres (3) áreas; usted debe realizar un algoritmo que
// permita ingresar el valor del presupuesto anual, ingresar el porcentaje correspondiente
// a cada área, realizar el cálculo del presupuesto que corresponde a cada área, si la suma
// de los porcentajes no corresponde al 100% debe mostrar un mensaje de error.
// Mostrar el porcentaje asignado a cada área y el presupuesto obtenido.

let porcePedi=(+prompt(`Digite el porcentaje para pediatria`))
let porceTrauma=(+prompt(`Digite el porcentaje para traumatologia`))
let porcePsiqui=(+prompt(`Digite el porcentaje para psiquiatria`))

porceTotal=porcePedi+porcePsiqui+porceTrauma

if (porceTotal>100){
    alert(`Alguno de los porcentajes esta mal digitado`)
}else{
    let presupuesto=(+prompt(`Digite el presupuesto anual del hospital`))

valPedi=presupuesto*porcePedi/100
valTrauma=presupuesto*porceTrauma/100
valPsiqui=presupuesto*porcePsiqui/100

document.write(`EL presupuesto para pediatria es ${valPedi}<br>`)
document.write(`EL presupuesto para traumatologia es ${valTrauma}<br>`)
document.write(`EL presupuesto para psiquiatria es ${valPsiqui}<br>`)
}

