// 5:En una Granja existen N conejos, C1 blancos y C2 negros. Se venden X conejos negros
// y Y conejos blancos. Hacer un algoritmo que:
// a) Imprima la cantidad de conejos vendida
// b) Si P1 es el precio de venta de los conejos blancos y P2 es el precio de venta de los
// conejos negros, imprima el monto total de la venta.
// c) Imprima el color de los conejos que se vendieron más.

let coneBlancos=(+prompt(`Digite la cantidad de conejos blancos que estan disponible`))
document.write(`Conejos blancos disponibles ${coneBlancos}<br>`)
let coneNegros=(+prompt(`Digite la cantidad de conejos negros que estan disponibles`))
document.write(`Conejos negros disponibles ${coneNegros}<br>`)
document.write(`<br>`)

total=coneBlancos+coneNegros

document.write(`El total de conejos disponibles entre negros y blancos es ${total}<br>`)

let compBlancos=(+prompt(`Cuantos conejos blancos quiere?`))
document.write(`Conejos blancos comprado ${compBlancos}<br>`)
if (compBlancos>coneBlancos){
    alert(+prompt(`No puede comprar mas conejos de los que hay, ${coneBlancos}, esos son los disponibles`))
}

let compNegros=(+prompt(`Cuantos conejos negros quiere?`))
document.write(`Conejos negros comprado ${compNegros}<br>`)
if (compNegros>coneNegros){
    alert(+prompt(`No puede comprar mas conejos de los que hay, ${coneNegros}, esos son los disponibles`))
}

document.write(`<br>`)

totalVendidos=compBlancos+compNegros

let precioBlancos=(+prompt(`Digite el precio de los conejos blancos`))
preTotalBlan=precioBlancos*compBlancos
document.write(`Precio conejos blancos ${precioBlancos}<br>`)

let precioNegros=(+prompt(`Digite el precio de los conejos negros`))
preTotalNegros=precioNegros*compNegros
document.write(`Precio conejos negros ${precioNegros}<br>`)

totalPago=preTotalBlan+preTotalNegros

document.write(`El total de conejos vendidos fue de ${totalVendidos}<br>`)
document.write(`El monto total a pagar por los conejos es de ${totalPago}<br>`)

document.write(`<br>`)

if (compBlancos>compNegros){
    document.write(`EL color de conejos que mas se vendio fue el Blanco`)
}else{
    document.write(`EL color de conejos que mas se vendio fue el Negro`)
}

