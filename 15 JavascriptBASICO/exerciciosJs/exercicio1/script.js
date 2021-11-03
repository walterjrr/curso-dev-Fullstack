
//pedir o nome 
let inputnome = prompt('qual seu nome?')
//pedir a idade
let inputidade = prompt('qual sua idade?')
//transformar a idade string em number
let idade = parseInt(inputidade)
//csaber se é maior ou menor
let maiorOuMenor
//fazer a comparacao se é maior ou menor
if (idade >= 18){
    maiorOuMenor = 'Maior'
} else{
    maiorOuMenor = 'Menor'
}
//criar o texto
let mensagem = `Olá ${inputnome}, você é ${maiorOuMenor} de idade!`

document.write(mensagem)