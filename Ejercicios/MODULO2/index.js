const number = [20, 30, 40, 50]
const person = { name: "pepe", lastname: "perez", age: 30, country: "Colombia" }

for (let prop in person) {
    console.log(prop)
}

for (let numero of number) {
    console.log(numero)
}



//declaradas
function sumar() {
    let a = 1
    let b = 2
    let c = a + b
    console.log(c)
}
sumar()


//expresadas
const suma = function () {
    let a = 1
    let b = 2
    let c = a + b
    console.log(c)
}
suma()