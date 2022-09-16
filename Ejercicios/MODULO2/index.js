const number=[20,30,40,50]
const person={name: "pepe", lastname: "perez", age: 30, country: "Colombia"}

for(let prop in person){
    console.log(prop)
}

for(let numero of number){
    console.log(numero)
}

const a=1
const b=2

function sumar(){
    let c=a+b
    console.log(c)
}

sumar()