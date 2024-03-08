let nome = prompt("Insira um nome")
let novo = prompt("Qual caractere deseja substituir")
let troca = prompt("Por qual caractere voce deseja substituir")
let value = ""

for(let i = 0;i < nome.length;i++){
    if(nome[i] == novo){
        value += troca
    }else{
         value += nome[i]
    }
}

alert("O novo nome é " + value)