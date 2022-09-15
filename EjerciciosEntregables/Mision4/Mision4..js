let rankingPrimi=`Leidy, Andrea, Valentina, Sergio, Ronald, Luis; 80, 63, 55, 42, 38, 30`
let rankingActu=`leydi,Gustavo,Jamile,Andrea,Sergio,Valentina,Ronald;80,77,77,63,56,55,38`

let rankingIni=function(){
    let arreglo1=rankingPrimi.split(`;`)
    console.log(arreglo1)
    
    let nombres=arreglo1.slice(0,1)
    nombres=nombres.join()
    nombres=nombres.split(`,`)
    console.log(nombres)

    let puntos=arreglo1.slice(1,2)
    puntos=puntos.join()
    puntos=puntos.split(`,`)
    console.log(puntos)

    console.log(`RANKING INICIAL`)
    for (let i=0; i<puntos.length; i++){
        puntos[i]= Number(puntos[i])
    }

        for (let i=0; i<6; i++){
            console.log(`${nombres[i]}, ${puntos[i]} puntos`)
        }
}

let rankingAct=function(){
    let arreglo1=rankingActu.split(`;`)

    let nombres=arreglo1.slice(0,1)
    nombres=nombres.join()
    nombres=nombres.split(`,`)
    
    let puntos=arreglo1.slice(1,2)
    puntos=puntos.join()
    puntos=puntos.split(`,`)

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