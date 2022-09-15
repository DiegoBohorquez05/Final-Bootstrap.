
// 1

// let num1=+prompt(`Digite valor para el primer numero`)
// let num2=+prompt(`Digite valor para el segundo numero`)

// document.write(`numero 1 ${num1}<br>`)
// document.write(`numero 2 ${num2}<br>`)
// document.write(`<br>`)

// if (num1>num2){
//     proce1=num1+num2
//     proce2=num1-num2
//     document.write(`La suma de los numeros es ${proce1}<br>`)
//     document.write(`La diferencia de los numeros es ${proce2}<br>`)
// }else{
//     proce3=num1*num2
//     proce4=num1/num2
//     document.write(`El producto entre los dos numeros es de ${proce3}<br>`)
//     document.write(`La division entre los dos numeros es de ${proce4}<br>`)
// }


// 2

// let num=+prompt(`Digite un numero`)

// if (num>99){
//     alert(`El numero es mayor a 99, no se puede`)
//     alert(+prompt(`Escriba otra vez el numero`))
// }

// if (num>=0 && num<=9){
//     document.write(`El numero es de un solo digito`)
// }else{
//     document.write(`El numero es de dos digitos`)
// }


// 3

// let nombre=prompt(`Digite el nombre del postulante`)
// let numPreguntas=+prompt(`Ingrese el numero de preguntas que se realizaron`)
// let numCorrectas=+prompt(`Ingrese el numero de preguntas que contesto bien el postulante`)
// document.write(`Nombre del postulante ${nombre}<br>`)
// document.write(`Preguntas realizadas ${numPreguntas}<br>`)
// document.write(`Preguntas correctas ${numCorrectas}<br>`)
// document.write(`<br>`)

// if (numCorrectas>numPreguntas){
//     alert(`Mal, el numero de preguntas correctas no puede ser mayor al numero de preguntas realizadas`)
//     alert(+prompt(`Digite nuevamente el numero de preguntas correctas`))
// }

// porcentaje=(numCorrectas/numPreguntas)*100
// document.write(`Porcentaje es igual ${porcentaje}%<br>`)

// if (porcentaje>=90){
//     document.write(`Nivel superior`)
// }else if (porcentaje>=75 && porcentaje<90){
//     document.write(`NIvel medio`)
// }else if (porcentaje>=50 && porcentaje<75){
//     document.write(`Nivel regular`)
// }else{
//     document.write(`Fuera del nivel`)
// }

    
// 4

// let num1=(+prompt(`Digite valor para el primer numero`))
// let num2=(+prompt(`Digite valor para el segundo numero`))
// let num3=(+prompt(`Digite valor para el tercer numero`))

// if (num1==num2 || num3==num1 || num3==num2){
//     alert(+prompt(`Alguno de los numeros es igual a otro`))
// }

// document.write(`Num1 ${num1}<br>`)
// document.write(`Num2 ${num2}<br>`)
// document.write(`Num3 ${num3}<br>`)
// document.write(`<br>`)

// if (num1<num2 && num1<num3){
//     if (num2<num3){
//         document.write(`El orden es: ${num1},${num2},${num3}`)
//     }else {
//         document.write(`El orden es: ${num1},${num3},${num2}`)
//     }
// }else if(num2<num1 && num2<num3){
//     if (num1<num3){
//         document.write(`El orden es: ${num2},${num1},${num3}`)
//     }else {
//         document.write(`El orden es: ${num2},${num3},${num1}`)
//     }
// }else if(num3<num2 && num3<num1){
//     if (num2<num1){
//         document.write(`El orden es: ${num3},${num2},${num1}`)
//     }else {
//         document.write(`El orden es: ${num3},${num1},${num2}`) 
//     }
// }


// 5

// let dia=(+prompt(`Digite el dia`))
// let mes=(+prompt(`DIgite el numero del mes`))
// let año=(+prompt(`Digite el año`))


// document.write(`fecha: ${dia}/${mes}/${año}`)

// document.write(`<br>`)


// if (dia==24 && mes==12){
//     document.write(`NAVIDAD`)
// }else{
//     document.write(`NO ES NAVIDAD :"(`)
// }


// 6

// let nombre=(prompt(`Digite el nombre del trabajador`))
// let sueldo=(+prompt(`Digite el sueldo del trabajador`))
// let antiguedad=(+prompt(`Digite el tiempo que lleva en la empresa`))

// if (sueldo<500 && antiguedad>=10){
//     total=sueldo*0.20
//     document.write(`El sueldo a pagar al trabajador ${nombre}, es de ${total+sueldo}`)
// }else if(sueldo<500 && antiguedad<10){
//     total=sueldo*0.05
//     document.write(`El sueldo a pagar al trabajador ${nombre}, es de ${total+sueldo}`)
// }else if (sueldo>=500){
//     document.write(`El sueldo a pagar al trabajador ${nombre}, es de ${sueldo}`)
// }


// 7

// let numCamisetas=(+prompt(`Digite el numero de camisetas vendidas`))
// let valCamisetas=(+prompt(`Digite el valor por unidad de las camisetas`))

// totalInicial=numCamisetas*valCamisetas

// if (numCamisetas>=1000){
//     descuento=totalInicial*0.10
//     totalFinal=totalInicial-descuento
//     document.write(`El descuento es de ${descuento}<br>`)
//     document.write(`El valor final es de ${totalFinal}`)
// }else if(numCamisetas>=500 && numCamisetas<=999){
//     descuento=totalInicial*0.08
//     totalFinal=totalInicial-descuento
//     document.write(`El descuento es de ${descuento}<br>`)
//     document.write(`El valor final es de ${totalFinal}`)
// }else if(numCamisetas>=200 && numCamisetas<=499){
//     descuento=totalInicial*0.05
//     totalFinal=totalInicial-descuento
//     document.write(`El descuento es de ${descuento}<br>`)
//     document.write(`El valor final es de ${totalFinal}`)
// }else if(numCamisetas<200){
//     document.write(`El valor final es de ${totalInicial}, no tendra descuento por ser menor a 200 unidades`)
// }



// 8
// cont=0
// num=0
// do{
//     num=num+11
//     cont=cont+1
//     document.write(`${num} `)
// }while(cont<25)

// while(cont<25){
//     num=num+11
//     cont=cont+1
//     document.write(`${num} `)
// }


// 9

// let num=40
// let conta=num

//     while(conta<=100){
//         document.writeln(`${conta}`)
//         conta=conta+num
//     }



// 10

// num=8
// do{
//     document.write(`${num} ,`)
//     num=num+8
// }while(num<500)


// 11

// let num=0
// let suma=0
// do{
//     suma=suma+num
//     num=(+prompt(`Digite valores`))
// }while(num != 9999)

// alert(`El programa acabo`)
// document.write(`La suma de los valores ingresados es ${suma}<br>`)

// if (suma<0){
//     document.write(`Suma menor a 0`)
// }
// else if(suma>0){
//     document.write(`Suma mayor a 0`)
// }else{
//     document.write(`Suma igual a 0`)
// }

 
// 8
// let nombre, saldo, suma=0
// let cuenta=(+prompt(`Digite el numero de la cuenta`))

// while(cuenta>0){
//      nombre=(prompt(`Digite el nombre del cliente`))
//      saldo=(+prompt(`Digite el saldo actual de la cuenta de, ${nombre}`))
    
//      document.write(`Nombre del cliente ${nombre}<br>`)
//      document.write(`Numero de cuenta ${cuenta}<br>`)
//      document.write(`Saldo actual ${saldo}<br>`)

//     if (saldo>0){
//         document.write(`Acreedor`)
//         suma=suma+saldo
//     }else if (saldo<0){
//         document.write(`Deudor`)
//     }else{
//         document.write(`Nulo`)
//     }
//     cuenta=(+prompt(`Digite el numero de la cuenta`))
// }
// document.write(`<br>`)
// document.write(`La suma de los acreedores es ${suma}<br>`)



// let conta=0
// let hombres=0
// let hombres2=0
// let mujeres=0

// let documento=(+prompt(`Digite el documento de la persona`))
// let nombre, edad, sexo


// while(documento>0){
//     edad=(+prompt(`Digite la edad de la persona`))
//     sexo=(prompt(`Digite el sexto de la persona, masculino o femenino`))

//     if(sexo="masculino"){
//         hombres++
//         if (edad>=16 && edad<=65){
//             hombres2++
//         }
//     }else{
//         mujeres++
//     }
//     conta++
//     documento=(+prompt(`Digite el documento de la persona`))
// }

// document.write(`La cantidad de personas censadas es de ${conta}<br>`)
// document.write(`La cantidad de varones es ${hombres}<br>`)
// document.write(`La cantidad de mujeres es ${mujeres}<br>`)
// document.write(`La cantidad de varones entre los 16 y los 65 años son ${hombres2}<br>`)



// let num, num2
// for(num=1;num<=5;num++){
//     for(num2=1;num2<=num;num2++){
//         document.write(`${num2} `)
//     }
//     document.write(`<br>`)
// }

// let array=[[],[]]
// for(let i=0;i<2;i++){
//     for(let j=0;j<2;j++){
//         n=prompt(`DIgite un numero ${i}-${j}`)
//         array[i][j]=n
//     }
// }

// for(let i=0;i<2;i++){
//     for(let j=0;j<2;j++){
//        document.write(array[i][j])

//     }
//     document.write(`<br>`)
// }


// let matriz=[]
// for (let i=1; i<=10;i++){
//     matriz.push(i)
// }
// document.write(matriz)


// let matriz=[]
// for (let i=1;i<=10; i++){
//     matriz.push(Math.floor(Math.random()*(11-1)+1))
// }
// document.write(matriz)

// let nombre=[]
// let nom
// for (let i=0; i=nombre; i++){
//     nom=(prompt(`Digite nombres`))
// }
// document.write(`${nombre[i]}`)
// document.write(nombre.sort())


// let grupo1=[[],[]]
// let grupo2=[[],[]]
// let estudiantes=[]

// for (i=0; i<5; i++){
//     // grupo1[0][i]=prompt(`Digite su nombre, GRUPO 1`)
//     // grupo1[1][i]=prompt(`Digite su genero, GRUPO 1`)
//     grupo1[0].push(prompt(`Escriba  el nombre`))
//     grupo1[1].push(prompt(`Digite el genero`))
// }


// for (i=0; i<5; i++){
//     // grupo2[0][i]=prompt(`Digite su nombre, GRUPO 2`)
//     // grupo2[1][i]=prompt(`Digite su genero, GRUPO 2`)
//     grupo2[0].push(prompt(`Digite el nombre, GRUPO2`))
//     grupo2[1].push(prompt(`Digite el genero, GRUPO 2`))
// }

// estudiantes=estudiantes.concat(grupo1[0],grupo2[0])
// document.write(estudiantes)


// let arreglo=[1,0,4,8,5,7,6,8,7,5,6,4,3,1,9,2]

// let posi=(+prompt(`Digite el numero que desea ver en el arreglo`))

// if (arreglo.indexOf(posi)!=-1){
//     primero=arreglo.indexOf(posi)
//     ultimo=arreglo.lastIndexOf(posi)
//     document.write(`Primero ${primero} `)
//     document.write(`Ultimo ${ultimo}`)
// }else{
//     alert((`Ese numero no esta en el arreglo`))
// }


// let usuario=["covidPass","VirSanito20","Star_lord"]
// let contraseña=["Arn2019","MesalveJJJ","Iamgrod"]


// for (let j=0; j<3; j++){
//         preUsuario=(prompt(`Escriba su usuario`))
//         preContra=(prompt(`Escriba su contraseña`))
//         preUsuario=usuario.indexOf(preUsuario)
//         preContra=contraseña.indexOf(preContra)
//         if (preUsuario==0 && preContra==0){
//             document.write(`Bienvenido`)
//             break
//         }else if(preUsuario==1 && preContra==1){
//             document.write(`Bienvenido`)
//             break
//         }else if(preContra==2 && preContra==2){
//             document.write(`Bienvenido`)
//             break  
//         }else if (preUsuario==-1){
//             alert(`Algo esta mal`)
//             alert(`Vuelva a escribir todo`)
//         }
//     }


// function saludar(){
//     let nombre=document.getElementById("nombre").value
//     alert(`Hola ${nombre}`)
//     let edad=document.getElementById("edad").value
//     if(edad>=18){
//         alert(`Ya esta grande gonorrea, trabaje`)
//     }else{
//         alert(`Todavia no, puede dormir`)
//     }

// }

// function cargar(evento){
//     event.preventDefault()
//     alert(`Se hizo un click en el enlace`)
// }

// let mensaje=function(){
//     alert(`Esta vaina espero 3 segundos para salir`)
// }
// setTimeout(mensaje,3000) //ESPERAR 3 SEGUNDOS PARA MOSTRAR O HACER ALGO


// let arreglo=["a", "b", "c", "d", "e"]
// const f=function(elemento){
//     document.write(elemento+"<br>")
// }
// arreglo.forEach(f)


// let arreglo=["a", "b", "c", "d", "e"]
// arreglo.forEach((item, index)=>{console.log(`En la posicion ${index}, se encuentra el elemento ${item}`)})
//HACER ALGO CON CADA UNO DE LOS ELEMENTOS DE UN ARREGLO


// let arreglo=["a", "b", "c", "d", "e"]
// console.log(arreglo.every(item=>item.length==1))
// VERIFICAR SI LOS ELEMENTOS DE UNA FUNCION CUMPLEN CON UNA CONDICION
// ARROJA TRUE O FALSE


// let arreglo=["aa", "b", "cc", "d", "ee"]
// console.log(arreglo.some(item=>item.length==1))
// VERIFICA QUE ALMENOS UNO DE LOS ELEMENTO CUMPLA CON UNA CONDICION
// ARROJA TRUE O FALSE


// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const tamaño=nombres.map(item=>item.length)
// console.log(tamaño)
//IMPRIME EL NUMERO DE CARACTERES QUE TENGA EL ELEMENTO
// `ANA` = 3


// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const nombre=nombres.filter(item=>item.startsWith(`J`))
// console.log(nombre)
// BUSCA LOS ELEMENTOS QUE CUMPLAN CON UNA CONDICION EXTRICTA
// EN ESTE EJEMPLO, LOS NOMBRES QUE EMPIECEN POR J MAYUSCULA


// const arreglo1=[10, 15, 20, [25, 30], 35, [40, 45,[50, 55],60]]
// console.log(arreglo1.flat(Infinity))
// QUITA LOS SUBARREGLOS Y DEJA 1 SOLO


// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const arreglo1=[10, 15, 20, [25, 30], 35, [40, 45,[50, 55],60]]
// const nombre=nombres.find(item=>item.length==4)
// console.log(nombre)
// BUSCA Y MUESTRA SOLO EL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION DADA


// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const arreglo1=[10, 15, 20, [25, 30], 35, [40, 45,[50, 55],60]]
// const nombre=nombres.findIndex(item=>item.length==4)
// console.log(nombre)
// MOSTRAR LA POSICION EN LA QUE ESTA EL ELEMENTO QUE CUMPLA CON LA CONDICION DADA


// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const arreglo1=[10, 15, 20, [25, 30], 35, [40, 45,[50, 55],60]]
// const nombre=nombres.findLast(item=>item.length==4)
// console.log(nombre)
// MUESTRA EL ULTIMO ELEMENTO QUE CUMPLA CON LA CONDICION DADA

// const nombres=[`Ana`, `Carlos`, `Juan`, `Jose`, `Jaraba`]
// const arreglo1=[10, 15, 20, [25, 30], 35, [40, 45,[50, 55],60]]
// const nombre=nombres.findLastIndex(item=>item.length==4)
// console.log(nombre)
// MUESTRA LA POSICION DEL ULTIMO QUE CUMPLA CON LA CONDICION DADA


// const arreglo=[0,1,2,3,4]
// console.log(arreglo.reduce((suma,actual)=>suma+actual))
// SUMA = VARIABLE QUE VA A GUARDAR EL RESULTADO DEL PROCESO
// ACTUAL = ELEMENTO EN EL QUE SE ENCUENTRA PARA HACER EL PROCESO


// torre,teclado,raton,monitor;5,2,3,4;1000,2000,3000,4000
let ingrese=function(){
    let cadena=(prompt(`Digite la cadena`))
    let arreglo=cadena.split(`;`) // Pasar de cadena a arreglo
    // todo=arreglo.slice(0)
    
    // todo=todo.join()
    // todo=todo.split(",")
    // console.log(todo)
    
    let div1=arreglo[0,0].split(",")
    let div2=arreglo[0,1].split(",")
    let div3=arreglo[0,2].split(",")
    console.log(arreglo)
    console.log(div1)
    console.log(div2)
    console.log(div3)
}




