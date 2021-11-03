
let inputnome = prompt('qual seu nome?')

let inputidade = prompt('qual sua idade?')

let idade = parseInt(inputidade)

let maiorOuMenor

if (idade >= 18){
    maiorOuMenor = 'Maior'
} else{
    maiorOuMenor = 'Menor'
}


let compararnome = ''

if (inputnome === 'thiago' || inputnome === 'Thiago'){
    compararnome = ' e é o professor!'
}

let mensagem = `Olá ${inputnome}, você é ${maiorOuMenor} de idade! ${compararnome}`

document.write(mensagem)