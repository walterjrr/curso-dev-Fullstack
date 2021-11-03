let valor = 0

const valorhtml = document.querySelector('#numero')

const diminuir = document.querySelector('#botaodiminuir')

const aumentar = document.querySelector('#botaoaumentar')

let avancar
let retroceder


diminuir.onclick = function() {
    clearInterval(avancar)

    diminuir.classList.add('red')
    aumentar.classList.remove('green')

    retroceder = setInterval(function(){
      valor--
    valorhtml.innerText = valor  
    },100)    
}

aumentar.onclick = function() {
    clearInterval(retroceder)

    aumentar.classList.add('green')
    diminuir.classList.remove('red')

    avancar = setInterval(function(){
      valor++
    valorhtml.innerText = valor  
    },100)    
}




