let detalle
let sobre=0
let regalo=0
let bono=0
let noEntra=0
let traen=0

for (let i=0; i<4; i++){
    detalle=(+prompt(`Detalle, 1. sobre, 2. regalo, 3. bono, 4. no trae`))
    if (detalle==1){
        sobre=sobre+1
    }else if(detalle==2){
        regalo=regalo+1
    }else if(detalle==3){
        bono=bono+1
    }else if(detalle==4){
        noEntra=noEntra+1
    }

    if (detalle==1 || detalle==2 || detalle==3){
        traen=traen+1
    }
}
document.write(`Cantidad de personas que traen presente ${traen}<br>`)
document.write(`Cantidad de personas que no traen presente ${noEntra}<br>`)
document.write(`Cantidad de sobres de dinero ${sobre}<br>`)
document.write(`Cantidad de regalos ${regalo}<br>`)
document.write(`Cantidad de bonos ${bono}<br>`)

