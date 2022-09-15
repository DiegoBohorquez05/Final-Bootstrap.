// 3:(sentencia switch) Diseñar un algoritmo que lea un número entero entre 1 y 10, y nos
// muestre por pantalla el número ingresado en letra (1 = uno). Si el número leído no está
// comprendido entre 1 y 10 mostrar un mensaje de error.

let num=(+prompt(`Digite un valor para numero entre 1 y 10`))

switch (num){
    case 1: document.write(`Uno`); break
    case 2: document.write(`Dos`); break
    case 3: document.write(`Tres`); break
    case 4: document.write(`Cuatro`); break
    case 5: document.write(`Cinco`); break
    case 6: document.write(`Seis`); break
    case 7: document.write(`Siete`); break
    case 8: document.write(`Ocho`); break
    case 9: document.write(`Nueve`); break
    case 10: document.write(`Diez`); break
    default: document.write(`No es un numero entre 1 y 10`)
}