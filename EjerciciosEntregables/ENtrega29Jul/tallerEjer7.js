// 7:Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original, cantidad
// y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 1 el
// descuento es del 10% y si la clave es 2 el descuento es del 20% (solo existen dos
// claves).

let articulo=(prompt(`Digite el articulo`))
let clave=(+prompt(`Digite la clave del producto`))
let preciOri=(+prompt(`Digite el precio de unidad`))
let cantidad=(+prompt(`Digite la cantidad de articulos comprados`))
precioSinDescu=cantidad*preciOri

document.write(`Numero de articulos ${cantidad}<br>`)
document.write(`EL precio por unidad del producto es ${preciOri}<br>`)
document.write(`EL precio sin descuento es de ${precioSinDescu}<br>`)

switch (clave){
    case 1:
        descuento=precioSinDescu*0.10
    precioFinal=precioSinDescu-descuento
    document.write(`El descuento para el articulo ${articulo}, es de ${descuento}<br>`)
    document.write(`El precio final es de ${precioFinal}`); break
    case 2:
        descuento=precioSinDescu*0.20
    precioFinal=precioSinDescu-descuento
    document.write(`El descuento para el articulo ${articulo}, es de ${descuento}<br>`)
    document.write(`El precio final es de ${precioFinal}`); break
    default:
    document.write(`No hay descuento<br>`)
    document.write(`EL precio final es de ${precioSinDescu}`); break
}