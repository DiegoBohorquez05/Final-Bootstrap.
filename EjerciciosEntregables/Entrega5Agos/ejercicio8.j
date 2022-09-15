let animales=(prompt(`Ingrese el animal a analizar`))
conta=1
contaPe=0
contaMe=0
ContaAd=0
let muestra


switch(animales){
    case "elefantes":
        muestra=20
    case "jirafas":
        muestra=15
    case "chimpances":
        muestra=40
}

document.write(`${animales}<br>`)
do{
    edad=(+prompt(`Digite la edad del animal`))
    if (edad>0 && edad<=1){
        contaPe=contaPe+1
    }else if(edad>1 && edad<3){
        contaMe=contaMe+1
    }else if(edad>=3){
        ContaAd=ContaAd+1
    }
    conta=conta+1
}while(conta<=muestra)
document.write(`Porcentaje del pequeño ${pequeño=contaPe/muestra*100}%<br>`)
document.write(`Porcentaje del mediano ${mediano=contaMe/muestra*100}%<br>`)
document.write(`Porcentaje del grande ${grande=ContaAd/muestra*100}%<br>`)
