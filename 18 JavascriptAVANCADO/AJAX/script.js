/*
AJAX

ASYNCHRONOUS JAVASCRIPT AND XML

rotas

endpoints

*/

const xhttp =  new XMLHttpRequest()

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        const response =  JSON.parse(this.responseText)

        console.log(response[0])
       
    }
}

//                                                            assincrono
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()

const imagens = document.querySelector('#imagens')

const imagemrequestfinal = []

response.forEach(function(response){ imagemrequestfinal.push(response.url)});

console.log(imagemrequestfinal)