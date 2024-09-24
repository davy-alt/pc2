let n

do{
    //permite apenas numero e nao letras na resposta do usuario
    n = parseInt(prompt("Digite um numero"))
    if(n <= 0 || isNaN(n)){
        alert("numero invalido")
    }
}while (n <= 0 || isNaN(n));
     
for(let j =1; i < n; i++){
    fatorial = 1
    for(let j = 1; j <= numescolhido; j++){
        fatorial = fatorial*j
    }
}

document.write(`O numero ${n} e seu fatorial é de ${fatorial}`)
  