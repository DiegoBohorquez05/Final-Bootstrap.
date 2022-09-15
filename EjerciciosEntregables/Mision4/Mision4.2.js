//leydi,Andrea,Valentina,Sergio,Ronald,Luis;80,63,55,42,38,30
let numero2, suma=0
let rankingIni=function(){
    let linea1=(prompt(`Escriba la linea de puntuaciones`))
    let arreglo1=linea1.split(`;`)

    let nombres=arreglo1.slice(0,1)
    nombres=nombres.join()
    nombres=nombres.split(",")

    let numeros=arreglo1.slice(1,2)
    numeros=numeros.join()
    numeros=numeros.split(",")

console.log(`RANKING INICIAL`)
    for (let i=0; i<numeros.length; i++){
        numeros[i]= Number(numeros[i])
    }

        for (let i=0; i<6; i++){
            console.log(`${nombres[i]} ${numeros[i]}`)
        }
    }

//----------------------------------------------------------------------------
//leydi,Gustavo,Jamile,Andrea,Sergio,Valentina,Ronald;80,77,77,63,56,55,38
let rankingAct=function(){
    let linea1=(prompt(`Escriba la linea de puntuaciones, otra vez`))
    let arreglo1=linea1.split(`;`)

    let nombres=arreglo1.slice(0,1)
    nombres=nombres.join()
    nombres=nombres.split(",")

    let numeros=arreglo1.slice(1,2)
    numeros=numeros.join()
    numeros=numeros.split(",")

console.log(`RANKING ACTUALIZADO`)
    for (let i=0; i<numeros.length; i++){
        numeros[i]= Number(numeros[i])
    }

        for (let i=0; i<7; i++){
            actualizado=(`${nombres[i]} ${numeros[i]}`)
            console.log(`${actualizado}`)
        }
    }
       nuevo=actualizado.reverse() 

let rankingInv=function(){
    console.log(`RANKING ALREVES`)
    console.log(`${nuevo}`)
}
// SE INTENTO HACER EL PROMEDIO EN EL PUNTO ANTERIOR Y LLAMARLO EN ESTA FUNCION
let promPuntajes=function(){
//80,77,77,63,56,55,38
let puntos=(prompt(`Digite la cadena de puntos de todos los participantes`))
let arreglo1=puntos.split(`,`)

let numeros=arreglo1.slice(1,2)
    numeros=numeros.join()
    numeros=numeros.split(",")
    
    for (let i=0; i<numeros.length; i++){
        numeros[i]= Number(numeros[i])
    }
    console.log(`${numeros}`)

    for (let i=0; i<numeros.length; i++){
        suma=suma+numeros[i]
    }
    promedio=suma/7
    console.log(`El promedio de los putnos es ${promedio}`)
//INTENTAMOS PREGUNTAR LOS PUNTAJES NUEVAMENTE Y SACAR EL PROMEDIO
}





//----------------------------------------------------------------------------
let Nombres=function(){
    console.log(`1. Andres diaz🤵`)
    console.log(`2. Juan Bohorquez 🧑‍🦲`)
}