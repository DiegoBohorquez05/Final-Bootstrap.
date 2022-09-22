function generarlista(vec){
    function inicio(){
        list=`<ol>`
    }
    function final(){
        list=list+`</ol>`
    }

    let list=``
    inicio()

    for(let i=0; i<vec.length; i++){
        list=list+`<li>`+vec[i]+`</li>`
    }
    final()
    return list
}

const lista=[`Estebam`,`Katerine`,`Kevin`,`Juan Diego`,`Ilba`,`Cristian`]

// document.write(generarlista(lista))

document.getElementById("lista").innerHTML=generarlista(lista)