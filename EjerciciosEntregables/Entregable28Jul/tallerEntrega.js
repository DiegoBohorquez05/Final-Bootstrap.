// 1. Evaluar las siguientes expresiones para A = 2, B = 5 y C=1:
// I. 3 x A - 4 x B / A
// II. (((B + C) / 2 * A + 10) * 3 * B) – 6 

// const A=2
// const B=5
// const C=1

// primera=3*A-4*B/A
// segundo=(((B + C) / 2 * A + 10) * 3 * B) - 6 

// document.write(`Solucion del ejercicio 1: ${primera}<br>`)
// document.write(`Solucion del ejercicio 2: ${segundo}`)





// 2. Un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará
// después de un mes si el banco paga a razón de 1,2% mensual.

// let inver=+prompt(`Escriba cuanto dinero va a ingresar al banco`)

// razon=inver*1.2

// document.write(`El total que ganara en un mes sera de ${razon}`)




// 3. Calcule el área del triángulo y muestre su resultado.

// let base=+prompt(`Escriba el valor de la base del triangulo`)
// let altura=+prompt(`Escriba la altura del triangulo`)

// area=(base*altura)/2

// document.write(`El area del triangulo es de ${area}`)



// 4. Una agencia de venta de autos paga a su personal de ventas un salario de $980.000, 
// más una comisión de $170.000 por auto vendido, más un 5% del valor de venta. Diseñar un algoritmo para calcular 
// el salario de un vendedor en un determinado mes, conociendo el nº de automóviles vendidos y el total del monto de ventas.

// const salario=980000
// const comision=170000

// let numCarros=+prompt(`Escriba el numero de carros que vendio en el mes`)
// comi=(comision*numCarros)
// extra=comi*0.5
// total=comi+salario+extra
// document.write(`El salario total del vendedor en el mes es de ${total}`)



// 5. Hallar el promedio de calificaciones, teniendo en cuenta que el 
// estudiante tiene 4 notas decimales; dos notas valen el 40% y las otras dos valen el 60%.

// let not1=+prompt(`Escriba el valor de la nota 1, valor del 20%`)
// let not2=+prompt(`Escriba el valor de la nota 2, valor del 20%`)
// let not3=+prompt(`Escriba el valor de la nota 3, valor del 30%`)
// let not4=+prompt(`Escriba el valor de la nota 4, valor del 30%`)

// porce1=((not1+not2)/2)*0.40
// porce2=((not3+not4)/2)*0.60
// porceTotal=porce1+porce2

// document.write(`nota 1: ${not1}  `)
// document.write(`nota 2: ${not2}  `)
// document.write(`nota 3: ${not3}  `)
// document.write(`nota 4: ${not4}<br>  `)

// document.write(`Notas=40% ${porce1}<br>`)
// document.write(`Notas=60% ${porce2}<br>`)
// document.write(`El promedio de las calificaciones es de ${porceTotal}`)


// 6. Calcular el número de pulsaciones que una persona debe tener por cada 10 
// segundos de ejercicio, si la fórmula es: num. pulsaciones = (220 - edad)/10

// let edad=+prompt(`Escriba la edad de la persona`)
// numPulsa=(220-edad)/10

// document.write(`El numero de pulsaciones de una persona a la edad de ${edad}, es de ${numPulsa}`)



// 7. Un vendedor recibe un sueldo base, más un 10% extra por comisión de sus ventas, 
// el vendedor desea saber cuánto dinero obtendrá por concepto de comisiones por las tres (3) 
// ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones. 

// let sueldo=+prompt(`Escriba el sueldo base del trabajador`)
// let ven1=+prompt(`Escriba el valor de la venta 1`)
// let ven2=+prompt(`Escriba el valor de la venta 2`)
// let ven3=+prompt(`Escriba el valor de la venta 3`)

// comision=(ven1+ven2+ven3)*0.10
// total=sueldo+comision

// document.write(`El sueldo total del vendedor es de ${total}`)


// 8. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa 
// y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

// La calificación de Matemáticas se obtiene de la sig. manera:
// Examen 90%
// Promedio de tareas 10%
// En esta materia se pidió un total de tres tareas.

// La calificación de Física se obtiene de la sig. manera:
// Examen 80%
// Promedio de tareas 20%
// En esta materia se pidió un total de dos tareas.

// La calificación de Química se obtiene de la sig. manera:
// Examen 85%
// Promedio de tareas 15%
// En esta materia se pidió un promedio de tres tareas.

// let examMate=+prompt(`Escriba cuanto saco en el extamen de matematicas`)
// prom1=examMate*0.90
// let tarea1Mate=+prompt(`Escriba cuanto saco en la tarea 1`)
// let tarea2Mate=+prompt(`Escriba cuanto saco en la tarea 2`)
// let tarea3Mate=+prompt(`Escriba cuanto saco en la tarea 3`)
// tareasMate=tarea1Mate+tarea2Mate+tarea3Mate
// prom2=tareasMate*0.10
// total1=prom1+prom2
// document.write(`El promedio de matematicas es de ${total1}<br>`)


// let examFis=+prompt(`Escriba cuanto saco en el extamen de fisica`)
// prom3=examFis*0.80
// let tarea1Fis=+prompt(`Escriba cuanto saco en la tarea 1`)
// let tarea2Fis=+prompt(`Escriba cuanto saco en la tarea 2`)
// tareasFis=tarea1Fis+tarea2Fis
// prom4=tareasFis*0.20
// total2=prom3+prom4
// document.write(`El promedio de fisica es de ${total2}<br>`)


// let examQuim=+prompt(`Escriba cuanto saco en el extamen de quimica`)
// prom5=examQuim*0.85
// let tarea1Quim=+prompt(`Escriba cuanto saco en la tarea 1`)
// let tarea2Quim=+prompt(`Escriba cuanto saco en la tarea 2`)
// let tarea3Quim=+prompt(`Escriba cuanto saco en la tarea 3`)
// tareasQuim=tarea1Quim+tarea2Quim+tarea3Quim
// prom6=tareasQuim*0.15
// total3=prom1+prom2
// document.write(`El promedio de quimica es de ${total3}<br>`)
