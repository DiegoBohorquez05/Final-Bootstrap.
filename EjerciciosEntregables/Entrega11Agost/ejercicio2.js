let arreglo=[]
let notas, total=0

for (let i=0; i<5; i++){
    notas=(+prompt(`Digite la nota`))
    if(notas>10 || notas<0){
        i=i-1
        alert(`Nota superior a 11 o nota inferior a 0`)
    }else{
        arreglo[i]=notas
        total=total+notas
    }
}
promedio=total/5

if(promedio>=9 && promedio<=10){
    document.write(`Excelente`)
}else if(promedio>=8 && promedio<9){
    document.write(`Sobresaliente`)
}else if(promedio>=6 && promedio<8){
    document.write(`Aceptable`)
}else if(promedio>=0 && promedio<6){
    document.write(`Deficiente`)
}
