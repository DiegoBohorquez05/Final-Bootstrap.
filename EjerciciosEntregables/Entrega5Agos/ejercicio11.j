let nota, total1=0,total2=0,nota2,porce1,porce2,notaFinal

let nombre=(prompt(`Digite el nombre del estudiante`))

for(i=0; i<2; i++){
    nota=(+prompt(`Digite el valor de las notas, valor 40%`))
    total1=total1+nota
}
porce1=(total1*0.4)/2
//4+5=9*0.4/2=1.8

for (let i=0; i<3; i++){
    nota2=(+prompt(`DIgite el valor de las notas, valor 60%`))
    total2=total2+nota2
}
//4+5+2=11*0.6/3=2.2
porce2=(total2*0.6)/3
notaFinal=porce1+porce2
//1.8+2.2=4

document.write(`Estudiante ${nombre}<br>`)
document.write(`La nota final del estudiante es ${notaFinal}`)
