let num=(+prompt(`Ingrese un numero para iniciar, diferente de 0`))
let matriz=[]

while(num!=0){
    if(num<100){
        matriz.unshift(num)
    }else if(num>=100){
        matriz.push(num)
    }
    num=(+prompt(`Digite mas numeros o de 0 para cerrar el cliclo`))
}
document.write(`<br>`)
document.write(matriz)
