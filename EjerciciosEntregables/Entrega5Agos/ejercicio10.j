// Una agencia de venta de autos paga a su personal de ventas un salario de $950.000, más una
// comisión de $170.000 por auto vendido, más un 5% del valor de venta. Diseñar un algoritmo
// para calcular el salario de un vendedor en un determinado mes, realizando la lectura por
// pantalla del no de automóviles vendidos y el valor de cada auto para hallar el monto total de
// ventas.

let salario=950000
let comision=170000
let extra=0.5
let valor, total=0,totalComi,totalExtra, sueldoFinal

let ventas=(+prompt(`Digite la cantidad de autos vendidos`))

for (let i=0; i<ventas; i++){
    valor=(+prompt(`Digite el valor de la venta de cada auto`))
    total=total+valor
}
totalComi=comision*ventas
totalExtra=total*0.5
sueldoFinal=salario+totalComi+totalExtra
document.write(`La comision que se le dara al trabajor sera de ${totalComi}<br>`)
document.write(`El total del porcentaje extra sera de ${totalExtra}<br>`)
document.write(`El sueldo final del vendedor sera de ${sueldoFinal}<br>`)
