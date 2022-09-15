let arreglo=[]
let num, suma=0

for (let i=0; i<5; i++){
    num=(+prompt(`Digite un numero`))
    arreglo[i]=num
    if (num>0){
        suma=suma+1
    }
}
document.write(`Hay ${suma} numeros positivos<br>`)
document.write(`Arreglo: ${arreglo}`)
