// 5. Hacer un algoritmo que imprima el nombre de 4 artículos, precio original y su precio con
// descuento. El descuento lo hace en base a la forma de pago, si es a contado será (1), y su
// descuento es del 10% y si la forma de pago es a crédito será dos (2) y su descuento es del 20%
// (solo existen dos claves).

let producto, valor, total=0

for (let i=0; i<4; i++){
    producto=(prompt(`Digite el producto`))
    valor=(+prompt(`Digite el valor del prodcuto`))
    document.write(`Producto ${producto}, con precio de ${valor}<br>`)
    total=total+valor
}

let cod=(+prompt(`Escriba el metodo de pago, 1=contado, 2=credito`))

document.write(`El total a pagar por los 4 productos es de ${total}<br>`)

switch (cod){
    case 1: 
            descuento=total*0.10
            precioFinal=total-descuento
            document.write(`Descuento de ${descuento} y precio final de ${precioFinal}<br>`)
            break;
            case 2:
            descuento=total*0.20
            precioFinal=total-descuento
            document.write(`Descuento de ${descuento} y precio final de ${precioFinal}<br>`)
            break;
}
