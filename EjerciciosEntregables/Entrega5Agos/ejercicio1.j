let total=0
let num=(+prompt(`Digite un numero`))
while (num>0) {
    total=total+num
    num=(+prompt(`Digite otro numero`))
}
document.write(`El total de la suma de todos los numeros es ${total}`)