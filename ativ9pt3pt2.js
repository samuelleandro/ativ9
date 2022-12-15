function conta (x, y, caracter){
    
    if (caracter == 1){
        return x + y
    }
    
    if (caracter == 2){
        return x - y
    }
    
    if (caracter == 3){
        return x * y
    }
    if (caracter == 4){
        return x / y
    }
}
var conta
var x = parseInt(prompt("Escolha um número"))
var y = parseInt(prompt("Escolha outro número"))
var caracter = parseInt(prompt("Escolha entre essas operações 1- Adição; 2- Subtração; 3- Multiplicação; 4- Divisão "))
alert (conta(x,y,caracter))
