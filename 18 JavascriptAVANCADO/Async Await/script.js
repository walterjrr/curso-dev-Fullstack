/*
ASYNC / AWAIT
*/

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
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformaremjson)
        .catch(exibirerro)

    console.log(dados)
}
