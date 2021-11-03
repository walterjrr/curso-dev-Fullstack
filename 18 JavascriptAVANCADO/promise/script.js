/*
PROMISES
*/
function exibirnatela(dados){
    console.log(dados)
}

function exibirerro() {
    console.log('erro')
}


const botaocarregar = document.querySelector('#carregar')

botaocarregar.onclick = () =>
 fetch('https://jsonplaceholder.typicode.com/photoss', 'GET')
    .then(exibirnatela)
    .catch(exibirerro)

function fetch(url, method){
    return new Promise((resolve, reject) => {
    const xhttp =  new XMLHttpRequest()

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const response =  JSON.parse(this.responseText)

                resolve(response)
            }
            if(this.status === 404){
                reject()
            
            }
        }

        //                                                            assincrono
        xhttp.open(method, url, true)
        xhttp.send()
    })      
}

