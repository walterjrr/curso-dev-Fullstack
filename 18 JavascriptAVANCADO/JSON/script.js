/*

JSON

Javascript Object Notation

*/

const objeto = {
    nome: 'Fulano',
    idade: 23,
}

const json = JSON.stringify(objeto)
const jsonreceber = JSON.parse(json)

console.log(jsonreceber.idade)