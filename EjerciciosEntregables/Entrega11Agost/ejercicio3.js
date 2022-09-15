let arreglo=[]
let num

for (let i=0; i<10; i++){
    num=(+prompt(`Digite un numero`))
    arreglo[i]=num
}
document.write(`Arreglo: ${arreglo}`)

let buscar=(+prompt(`Digite que numero quiere buscar`))
document.write(`<br>`)

for (let j=0; j<arreglo.length; j++){
    if (arreglo.indexOf(buscar)!=-1){
        document.write(`Si se encontro el numero ${buscar}`)
        document.write(`<br>`)
        document.write(`El numero se encuentra en la posicion ${arreglo.indexOf(buscar)}`)
        break
    }else
        document.write(`No se encontro el numero`)
        break
    }