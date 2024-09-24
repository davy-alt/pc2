/**Elabore um programa que leia um numero N e que indique quantos valores inteiro e positivos devem ser lidos a seguir.
 *  Para cada número lido, mostre o valor lido e fatorial desse valor */

let quantidade, numescolhido, fatorial;

do{
quantidade = parseInt(prompt("Quantos numero fatorias você deseja saber"))
    //permite apenas numero e nao letras na resposta do usuario
    if(quantidade <= 0 || isNaN(quantidade)){
        alert("numero invalido")
    }
}while (quantidade <= 0 || isNaN(quantidade));

//executa quantas vezes o usuario escolher
for(let i = 1; i <= quantidade; i++){

    do{
        numescolhido = parseInt(prompt(`Digite o ${i} numero para saber o fatorial `))
            //permite apenas numero e nao letras na resposta do usuario
            if(numescolhido <= 0 || isNaN(numescolhido)){
                alert("numero invalido")
            }
        }while (numescolhido <= 0 || isNaN(numescolhido));
        //variavel colocada no lugar errada pode alterar o resultado da programação
        fatorial = 1
        for(let j = 1; j <= numescolhido; j++){
            fatorial = fatorial*j

        }
            document.write(`Fatorial de ${numescolhido} é ${fatorial} <br>`)
}
