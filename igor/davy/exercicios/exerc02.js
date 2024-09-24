/**Elabore um programa que leia um número e verifique se ele é ou nao perfeito.
 Um numero dito perfeito é aquela que é igual a soma dos seus divisores interno (exceto o proprio numero)*/

 let numero, numperfeito = 0

 do{
    numero = parseInt(prompt("qual é o numero que você deseja saber se é primo ou não?"))
    if(numero < 0 || isNaN(numero)){
        alert("Número digitado invalido")
    }
    }while ( numero <= 0 || isNaN(numero));

    //estrutura vai repetir de 1 até o antecessor do numero que o usuario digitar
    for(let i =1; i <    numero; i++){
        if(numero % i ===0){
            //soma do numero que o usuario digitou com os divisores dele
            numperfeito = numperfeito + i
        }
    }

    if(numperfeito === numero){
        document.write(`O numero ${numero} é um numero perfeito`)
    }else{
        document.write(`O numero ${numero} não é um numero perfeito`)
    }