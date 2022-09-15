// Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la
// semana. Su política de pagos es que un vendedor recibe un sueldo base, y un 10% extra por
// comisiones de sus ventas. El gerente de su compañía desea saber cuánto dinero obtendrá en la semana cada vendedor por concepto de comisiones por las tres ventas realizadas, y cuanto
// tomando en cuenta su sueldo base y sus comisiones.

let n=(+prompt(`Digite la cantidad de vendedores que tiene la empresa`))

for (let i=0; i<n; i++){
    sueldo=(+prompt(`Digite el sueldo base del trabajador`))
    venta1=(+prompt(`Digite el valor de la venta 1`))
    venta2=(+prompt(`Digite el valor de la venta 2`))
    venta3=(+prompt(`Digite el valor de la venta 3`))
    suma=venta1+venta2+venta3
    comi=suma*0.10
    total=sueldo+comi
    document.write(`La comision que va a tener el trabajor es ${comi}<br>`)
    document.write(`El vendedor hizo ventas totales de ${suma}<br>`)
    document.write(`El sueldo base del trabajador es de ${sueldo}<br>`)
    document.write(`El total a pagar al vendedor es ${total}<br>`)
    document.write(`<br>`)
}

