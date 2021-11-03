let valor = 0

const valorhtml = document.querySelector('#numero')

const diminuir = document.querySelector('#botaodiminuir')

const aumentar = document.querySelector('#botaoaumentar')



diminuir.onclick =  function() {
    valor--
    valorhtml.innerHTML = valor
}

aumentar.onclick =  function() {
    valor++
    valorhtml.innerHTML= valor
}