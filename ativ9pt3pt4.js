function soma(somadosimpares){
    for(var i = num1; i<=num2; i++){
        if(i % 2 != 0){
            somadosimpares += i
        }
    }

    alert("A soma dos números ímpares neste intervalo é igual a: " + somadosimpares)
}

var num1 = parseInt(prompt("Digite o primeiro valor: "))
var num2  = parseInt(prompt("Digite o segundo valor: "))
var somadosimpares = 0
var soma
while(num1 >= num2){
    num1 = parseInt(prompt("Digite o primeiro valor de forma que ele seja menor que o segundo: "))
    num2 = parseInt(prompt("Digite o segundo valor: "))
}

soma(somadosimpares)