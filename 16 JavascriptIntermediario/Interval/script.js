
let contador = document.querySelector('#contador')

let count = 0

let intervalo =  setInterval(function(){
    count++
    contador.innerText = count
}, 1)

let botaopausar = document.querySelector('#pausar')

botaopausar.onclick = function(){
    clearInterval(intervalo)
}