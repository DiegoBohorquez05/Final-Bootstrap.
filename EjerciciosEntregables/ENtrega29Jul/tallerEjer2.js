// 2:(sentencia switch) Diseñar un algoritmo que lea por teclado un número comprendido
// entre 1 y 10. Se desea visualizar si el número es par o impar. En primer lugar, se deberá
// detectar si el número está comprendido en el rango válido (1 a 10) y a continuación si
// el número es 1, 3, 5, 7, 9, escribir un mensaje de “impar”; si es 2, 4, 6, 8, 10, escribir un
// mensaje de “par”.

let num=(+prompt(`Digite un valor para numero entre 1 y 10`))

if (num>10 || num<1){
    alert(`Es un numero de 1 a 10, cabezon`)
    num=(+prompt(`Digite otra vez el valor para numero`))
}

switch (num){
    case 1: document.write(`impar`); break
    case 3: document.write(`impar`); break
    case 5: document.write(`impar`); break
    case 7: document.write(`impar`); break
    case 9: document.write(`impar`); break
    default: document.write(`par`)
}