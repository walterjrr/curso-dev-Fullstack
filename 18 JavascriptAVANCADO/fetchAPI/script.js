/*
FETCH
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

botaocarregar.onclick = () =>
 fetch('https://jsonplaceholder.typicode.com/photos',{
     method: 'GET'//padrao
 })
 .then(transformaremjson)
    .then(exibirnatela)
    .catch(exibirerro)

