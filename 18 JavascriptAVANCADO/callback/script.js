/*
CALLBACK
*/

function exibirnatela(dados){
    console.log(dados)
}

const botaocarregar = document.querySelector('#carregar')

botaocarregar.onclick = () => carregarfotos(exibirnatela)

function carregarfotos(callback){

        const xhttp =  new XMLHttpRequest()

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const response =  JSON.parse(this.responseText)

            if(callback){
                callback(response)
            } 
        }
    }

    //                                                            assincrono
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()

}

