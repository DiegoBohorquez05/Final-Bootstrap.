let operacion=function(){
    let value = document.getElementById("faren").value;
    let calcular = (value-32)*5/9
    document.getElementById('celsius').textContent=calcular
}

let boton = document.getElementById("boton1")
boton.addEventListener('click',operacion)

