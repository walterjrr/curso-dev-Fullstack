/*
Arrow Functions

ES6

permite escrever umna sintaxe de funcao mais curta

*/

//retorno implicito
const soma = (param1, param2) => param1 + param2


const resultado = soma(10, 2)

console.log(resultado)


//quando tem 1 parametro pode remover o parentese
const teste = param1 => param1
    
console.log('ok')


const botao = document.querySelector('#button')

botao.onclick = () =>{
    console.log(this)
}




