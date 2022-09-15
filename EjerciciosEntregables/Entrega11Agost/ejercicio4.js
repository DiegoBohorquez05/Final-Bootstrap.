let numero=(+prompt(`Digite el numero de clientes maximo`))
let codigo
let suma=0
let conta=0

monto=[]

for (i=0; i<numero; i++){
    codigo=(+prompt(`Digite el codigo del cliente`))
    deposito=(+prompt(`Digite el monto a depositar`))
    monto[codigo]=deposito
    conta=conta+1
}

for (i=0; i<numero; i++){
    if(deposito>0){
        suma=suma+deposito
    }
}
console.log(monto)
document.write(`Total depositos ${suma}<br>`)
document.write(`El numero de clientes depositando es ${conta}`)
