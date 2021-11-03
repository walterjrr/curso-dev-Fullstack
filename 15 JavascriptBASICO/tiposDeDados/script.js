/* 

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'Walter'
console.log(nome)

//string + concatenada
let sobrenome = 'junior'
//console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome} `)

//number
let idade = 35
console.log(idade)
console.log(idade + 10)

//number float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array

let habilidades = ['javascript', 'php', 'python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2])

//object
let pessoa = {
    nome: 'fulano',
    sobrenome: 'da silva',
    idade: 25,
    habilidades:['c++', 'c#', 'python']
}
console.log(pessoa)
console.log(pessoa.habilidades[1])

//undefined
let endereco
console.log(endereco)

//null
let cidade = null
console.log(cidade)
