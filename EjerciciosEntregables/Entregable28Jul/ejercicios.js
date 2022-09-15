document.write(`Resuelva los siguientes ejercicios:`, `<br>`)
// 1
document.write("ejercicio 1: 40 + 2 * 7 ** 2 <br>")
document.write(`El resultado de la operacion anterior es `, 40 + 2 * 7 ** 2, `<br>`)
//2
document.write("ejercicio 2: 3+ (2+5)*1+ (3-2*3) <br>")
document.write(`El resultado de la operacion anterior es `, 3+ (2+5)*1+ (3-2*3), `<br>`)
//3
document.write("ejercicio 3: 16 - 8 * (10 - (5 + 4)) <br>")
document.write(`El resultado de la operacion anterior es `, 16 - 8 * (10 - (5 + 4)), `<br>`)
//4
document.write("ejercicio 4: (5+3*2)-(7*2)*(3+ (2*3-1)) <br>")
document.write(`El resultado de la operacion anterior es `, (5+3*2)-(7*2)*(3+ (2*3-1)), `<br>`)
//5
document.write("ejercicio 5: (24+220)/3*2 <br>")
document.write(`El resultado de la operacion anterior es `, (24+220)/3*2, `<br>`)
//6
document.write("ejercicio 6: (6/3*2)-(7*2)+ (2*(3+ (2/3-1)*4)) <br>")
document.write(`El resultado de la operacion anterior es `, (6/3*2)-(7*2)+ (2*(3+ (2/3-1)*4)), `<br>`)
document.write(`Resuelva las siguientes expresiones aritméticas:`, `<br>`)
//1
document.write("ejercicio 1: 29.7 + 5.0 ** 2.0 <br>")
document.write(`El resultado de la operacion anterior es `, 29.7 + 5.0 ** 2.0, `<br>`)
//2
document.write("ejercicio 2: ( (2 - 3) ** 4 * 5 / (4 + 3 * 9) ) <br>")
document.write(`El resultado de la operacion anterior es `, ( (2 - 3) ** 4 * 5 / (4 + 3 * 9) ), `<br>`)
//3
document.write("ejercicio 3: 49.38 + 127.73 - 15.02 * 6.83 / 3.22 <br>")
document.write(`El resultado de la operacion anterior es `, 49.38 + 127.73 - 15.02 * 6.83 / 3.22, `<br>`)
//4
document.write("ejercicio 4: 19 DIV 3 <br>")
document.write(`El resultado de la operacion anterior es `, Math.trunc(19/3), `<br>`)
//5
document.write("ejercicio 5: 15 MOD 6 <br>")
document.write(`El resultado de la operacion anterior es `, 15 % 6, `<br>`)
//6
document.write("ejercicio 6: ((15 * 8 MOD 6 + 24 DIV 2 ** 3) ** 3 / 4) * (5 ** 1 / 2 + 1 / 4 + 2 ** 3 - 4) <br>")
document.write(`El resultado de la operacion anterior es `, ((15 * 8 % 6 + Math.trunc(24/2 ** 3)) ** 3 / 4) * (5 ** 1 / 2 + 1 / 4 + 2 ** 3 - 4), `<br>`)

document.write(`Resuelva las siguientes expresiones lógicas:`, `<br>`)
//1
document.write("ejercicio 1: V OR V AND F OR V <br>")
document.write(`El resultado de la operacion anterior es `, true || true && false || true, `<br>`)
//2
document.write("ejercicio 2: NOT ( (F OR F) AND (V OR V) OR V ) <br>")
document.write(`El resultado de la operacion anterior es `, ! ( (false || false) && (true || true) || true ), `<br>`)
//3
document.write("ejercicio 3: NOT F AND (F OR V) AND (NOT V AND F) <br>")
document.write(`El resultado de la operacion anterior es `, ! false && (false || true) && (! true && false), `<br>`)
//4
document.write("ejercicio 4: NOT ( V OR F) AND (F AND V) <br>")
document.write(`El resultado de la operacion anterior es `, ! ( true || false) && (false && true), `<br>`)

document.write("Juan Diego Bohorquez Orduz")
