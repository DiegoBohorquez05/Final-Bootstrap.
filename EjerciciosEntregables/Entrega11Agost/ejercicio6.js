let arreglo1=[]
let arreglo2=[]
let numero=10


for(let i=0; i<numero; i++){
    arreglo1.push(Math.floor(Math.random()*(10-1)+1))
}

arreglo2=[...arreglo1]
for(let i=0; i<numero; i++){
    if(i%2==0){
        delete arreglo2[i]
    }
}

document.write(`Arreglo: ${arreglo1}<br>`)
document.write(`Arreglo 2: ${arreglo2}`)
