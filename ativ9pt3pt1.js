function novovalor (antigo_valor, valor_a_ser_pago){

    if (antigo_valor - valor_a_ser_pago < 0) {
    alert ("Saldo insufisciente")
    } 
    else if (antigo_valor - valor_a_ser_pago >= 0)
    alert ("Seu saldo atual é de " + (antigo_valor - valor_a_ser_pago));
   
}
var antigo_valor = parseInt(prompt("Digite aqui seu saldo atual"))
var valor_a_ser_pago = parseInt(prompt("Digite aqui o valor a ser pago"))
var novovalor 
novovalor(antigo_valor, valor_a_ser_pago)






