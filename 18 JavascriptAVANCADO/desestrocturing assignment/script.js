/*
desestructuring assignment
*/


const obj = {
    name: 'fulano',
    idade: 33,
}

const { name: nomedousuario, idade } = obj

console.log(nomedousuario)


function transformaremjson(response){
   return response.json()
}

function exibirnatela(dados){
    console.log(dados)
}

function exibirerro() {
    console.log('erro')
}


const botaocarregar = document.querySelector('#carregar')

botaocarregar.onclick = aoclicarnobotao

async function aoclicarnobotao(){
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformaremjson)
        .catch(exibirerro)

    const {name, email, phone} = dados

    console.log(name, email, phone)
}
