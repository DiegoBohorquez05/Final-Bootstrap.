let num=(+prompt(`Digite un numero`))
num2=1

if (num<0){
    alert(+prompt(`El numero debe ser positivo`))
}else{
    while(num2<num){
        document.writeln(`${num2}`)
        num2=num2+2
    }
}
