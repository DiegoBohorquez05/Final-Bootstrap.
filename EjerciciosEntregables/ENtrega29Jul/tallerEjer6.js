// 6:Diseñe un algoritmo que permita calcular la nota definitiva para los estudiantes,
// determinadas sobre las siguientes condiciones:
// a. NOTA PREVIOS será el promedio de los previos por el 60%. Cada estudiante tendrá
// 3 evaluaciones.
// b. NOTA TRABAJOS será el promedio de los trabajos por el 40%. Cada estudiante
// presentara 2 trabajos.
// c. NOTA FINAL será la suma de la nota de los previos y nota de los trabajos.
// d. Nota mínima 1,0 nota máxima: 5,0

let nombre=(prompt(`DIgite el nombre del estudiante`))

let eva1=(+prompt(`Digite la nota de la evaluacion 1`))
let eva2=(+prompt(`Digite la nota de la evaluacion 2`))
let eva3=(+prompt(`Digite la nota de la evaluacion 3`))

let tra1=(+prompt(`Digite la nota de la trabajos 1`))
let tra2=(+prompt(`Digite la nota de la trabajos 2`))


totalEva=(eva1+eva2+eva3)/3
totalTrab=(tra1+tra2)/2

promEva=totalEva*0.60
promTrab=totalTrab*0.40

notaFinal=promEva+promTrab

if (totalEva<1.0 || totalEva>5.0 || totalTrab<1.0 || totalTrab>5.0){
    alert(`Alguna de las notas esta mal escrita`)
}else{
    document.write(`Promedio evaluaciones: ${totalEva}<br>`)
    document.write(`Promedio trabajos: ${totalTrab}<br>`)
    document.write(`<br>`)

    document.write(`La nota final del estudiante ${nombre}, es ${notaFinal}`)

}

