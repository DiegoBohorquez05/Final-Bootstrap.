// Una persona debe realizar un muestreo con 20 personas para determinar el promedio de peso
// de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las
// categorías con base en la sig., tabla:
// EDAD CATEGORIA
// 0 – 12 Niños
// 13 – 29 Jóvenes
// 30 – 59 Adultos
// 60 en adelante Viejos

conta=1
let edad, categoria
let SumaAd=0, sumaJo=0, sumaNi=0, SumaVi=0
let contaAd=0, contaJo=0, contaNi=0, contaVi=0
let promAd=0, promJo=0, promNi=0, promVi=0

do{
    edad=(+prompt(`Digite la edad de la persona`))
    peso=(+prompt(`Digite el peso de la persona`))
    if (edad>=0 && edad<=12){
        sumaNi=sumaNi+peso
        contaNi=contaNi+1
    }else if(edad>=13 && edad<=29){
        sumaJo=sumaJo+peso
        contaJo=contaJo+1
    }else if (edad>=30 && edad<=59){
        SumaAd=SumaAd+peso
        contaAd=contaAd+1
    }else{
        SumaVi=SumaVi+peso
        contaVi=contaVi+1
    }
    conta=conta+1
}while (conta<=4)


if (contaNi!=0){
    promNi=sumaNi/contaNi
}else{
    promNi=0
}

if (contaJo!=0){
    promJo=sumaJo/contaJo
}else{
    promJo=0
}

if(contaAd!=0){
    promAd=SumaAd/contaAd
}else{
    promAd=0
}

if (contaVi!=0){
    promVi=SumaVi/contaVi
}else{
    promVi=0
}

document.write(`Promedio de los niños ${promNi}<br>`)
document.write(`Promedio de los jovenes ${promJo}<br>`)
document.write(`Promedio de los adultos ${promAd}<br>`)
document.write(`Promedio de los viejos ${promVi}<br>`)
