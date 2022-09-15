//declaracion de varibles
let ranking = [["leidy", 80],["andrea", 63],["valentina", 55],["sergio", 42] ,["ronald", 38] ,["luis", 30]];
let ranking2 = [["leidy", 80],["andrea", 63],["valentina", 55],["sergio", 42] ,["ronald", 38] ,["luis", 30]];
let rancking3 = []
let bandera = 0;
let bandera2 = 0;
let bandera3 = 0;
let bandera4 = 0;
let nuevo, nuevo1, nuevo2, nuevo3, nuevo4, suma=0, promediototal, nuevo5, nombre

let contenido = document.getElementById("contenido")
let nombress = document.getElementById("nombress")
let promedioo = document.getElementById("promedioo")

//1. funcion para mostrar la tabla inicial
let tablainicial = function(){
    contenido.innerHTML = ""
   let texto
    if (bandera==0){
        console.table(ranking)
        bandera = 1
    }else if (bandera ==1){
        console.log("ya ingresaste el rancking")
    }
   texto = "<table><tr><td>nombres</td><td>puntos</td></tr>"
   ranking.forEach(element => {
    texto += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
   });
   texto+="</table>"
   contenido.innerHTML = texto
}
    //-------------------agregar a sergio-----------------------------
    nuevo = ranking2.findIndex(elemento=> elemento[0] === "sergio")

ranking2[nuevo][1] = ranking2[nuevo][1] + 14  



//---------------------agragar a leidy y a jamile-------------------

nuevo2 = ranking2.findIndex(elemento=> elemento[0] === "leidy")

ranking2.splice(nuevo2 + 1, 0, ["gustavo", 77], ["jamile", 77])

//-------------------agregar a yanires -----------------------------

ranking2.unshift(["yanires", 93])

ranking2.sort((a,b) => {return b[1]-a[1]} )
//---------------------eliminar a luis--------------------------

nuevo1 = ranking2.findIndex(elemento=> elemento[0] === "luis")

ranking2.splice(nuevo1,1)


//2. funcion para mostrar la tabla actulizada
let tablaact = function(){


if (bandera2 == 0){
    console.table(ranking2)
    bandera2 = 1
}else if (bandera2 == 1){
    console.log("ya actulizo el rancking")
}
texto = "<table><tr><td>nombres</td><td>puntos</td></tr>"
ranking2.forEach(element => {
 texto += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
});
texto+="</table>"
contenido.innerHTML = texto
}



//3. mostrar la tabla en forma inversa

let tablainv = function(){
if (bandera3 == 0){
    nuevo4 = [...ranking2].reverse()
    console.table(nuevo4)
    bandera3=1
}else if(bandera3==1){
console.log("ya se mostro en forma inversa")
}
texto = "<table><tr><td>nombres</td><td>puntos</td></tr>"
nuevo4.forEach(element => {
 texto += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
});
texto+="</table>"
contenido.innerHTML = texto
}


//4. sacar el promedio del rancking
let promedio = function(){
    promedioo.innerHTML = ""
    if (bandera4 ==0){
        ranking2.forEach(element => suma += element[1])
        promediototal = suma / ranking2.length
        console.log(promediototal)
        bandera4 = 1
    }else if(bandera4 == 1){
        console.log("ya saco el promedio")
    }
texto = promediototal
promedioo.innerHTML = texto
}

//5. participantes mayor que 50


let mayor50 = function(){
    ranking2.forEach(element => {
        if (element[1]>50){
            rancking3.push(element)
        }
        
    })
    console.table(rancking3)
    texto = "<table><tr><td>nombres</td><td>puntos</td></tr>"
    rancking3.forEach(element => {
     texto += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
    });
    texto+="</table>"
    contenido.innerHTML = texto
}

//6. agregar a luis

nombre = ranking.find(element => element[0] == "luis")
 nombre[1] = (nombre[1] * 1.3)
let agregar = function(){
    console.log(nombre)
    let ingresar = [...ranking2]
    ingresar.push(nombre)
    ingresar.sort((a,b) => {return b[1]-a[1]} )
    console.table(ingresar)
    texto = "<table><tr><td>nombres</td><td>puntos</td></tr>"
    ingresar.forEach(element => {
     texto += "<tr><td>"+element[0]+"</td><td>"+element[1]+"</td></tr>"
    });
    texto+="</table>"
    contenido.innerHTML = texto
}

//acerca de ...

let acercade = function(){
    nombress.innerHTML = ""
    console.log("Andres Diaz y Juan Diego")
    texto = "Andres Diaz - Juan Bohorquez"
    nombress.innerHTML = texto
}