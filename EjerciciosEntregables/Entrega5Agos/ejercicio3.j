let num
let maximo=100
let minimo=1

for (i=1;i<=5;i++){
    num=Math.floor(Math.random()*(maximo-minimo)+minimo)
    document.write(`${num} `)
}
