// 1:Leer dos (2) números y los imprima en forma ascendente.

let num1=(+prompt(`Digite valor para numero 1`))
let num2=(+prompt(`Digite valor para numero 2`))

if (num1>num2){
    document.write(`${num2},${num1}`)
}else{
    document.write(`${num1},${num2}`)
}
