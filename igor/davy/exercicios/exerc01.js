//Faça um algoritmo para verificar se o número digitado pelo usuario é um número primo

let numero, contador = 0


do{
numero = parseInt(prompt("qual é o numero que você deseja saber se é primo ou não?"))
if(numero < 0 || isNaN(numero)){
    alert("Digite número inteiro e maior que 0")
}
}while ( numero <= 0 || isNaN(numero));
//estrutura vai repetir de 1 até o que o usuário digitar
for(let i = 1; i <= numero; i++){
    document.write(`${numero}%${i} = ${numero%i} <br>`)
    //numero que o usuario digitou divido por i
    if(numero % i == 0){
    contador++//vai receber 1 a cada divisão com o resto 0
     }
    }   
    if(contador == 2){
        document.write(`O número ${numero} é primo`)
    }else{
        document.write(`O número ${numero} não é primo`)
    }
   
