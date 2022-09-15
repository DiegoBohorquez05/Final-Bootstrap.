// 9:Diseñar un algoritmo para determinar el precio del tiquete de ida y vuelta en avión,
// conociendo la distancia a recorrer, sabiendo que si el número de días de estancia es
// superior o igual a 7 y la distancia superior a 800 km el billete tiene una reducción del
// 30%. El precio por km es de $2,5 dólares.

let dias=(+prompt(`Digite los dias que dura su viaje`))
let distancia=(+prompt(`Digite la distancia de su viaje, ida y vuelta`))

precioSinDescu=2.5*distancia

if (dias>=7 && distancia>800){
    descuento=precioSinDescu*0.30
    precioFinal=precioSinDescu-descuento
    document.write(`El precio sin descuento es de ${precioSinDescu}<br>`)
    document.write(`El descuento es de ${descuento}<br>`)
    document.write(`El precio final del viaje es ${precioFinal}`)
}else{
    document.write(`No hay descuento, el precio final del viaje es ${precioSinDescu}`)
}
