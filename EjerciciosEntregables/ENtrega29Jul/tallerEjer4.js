// 4:Determinar la cantidad total a pagar por una llamada telefónica, teniendo en cuenta lo
// siguiente:
// • toda llamada que dure tres minutos o menos tiene un coste de 200 pesos.
// • cada minuto adicional a partir de los tres primeros es un paso de contador y cuesta
// 100 pesos.

let tiempo=(+prompt(`Digite los minutos que duro la llamada`))

if (tiempo<=3){
    document.write(`Tiempo en llamada ${tiempo}<br>`)
    document.write(`La llamada tiene un costo de 200 pesos`)
}else{
    totalTiem=tiempo-3
    totalPago=totalTiem*100
    document.write(`Tiempo en llamada: ${tiempo} minutos <br>`)
    document.write(`El tiempo extra de la llamada es de ${totalTiem} minuto<br>`)
    document.write(`La llamada tiene un costo de ${totalPago+200} pesos`)
}
