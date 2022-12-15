function conta1( contador, somatorio){
    for(var i =0; i<contador; i++){
        x = Number(prompt("Digite o " + (i+1) + "º valor: "))
        somatorio += x;
    }
    
    alert ("O valor final do primeiro somatorio é igual a " + somatorio)
    alert (" O valor final da primeira média é igual a " + somatorio / contador);
    
}
function conta2 (contador, somatorio){
    contador = Number(prompt("Digite a nova quantidade de números que serão digitados"))
    
    for(var i = 0; i<contador; i++){
        x = Number(prompt("Digite o " + (i+1) + "º valor: "))
        somatorio += x;
    } 
    

    document.write("O valor final do segundo somatório é igual a: " + somatorio);
    document.write(".   O valor final da segunda média é igual a " + somatorio / contador);
}

var x
var contador = 4
var somatorio = 0
var conta1
var conta2






conta1(contador, somatorio)
conta2(contador, somatorio)