
let toast = document.querySelector('.toast')
let botaocadastrar = document.querySelector('#botaocadastrar')

let valortarefa = document.querySelector('#valor')

botaocadastrar.onclick = function (){
    toast.classList.add('visible')
    toast.innerHTML = `tarefa ${valortarefa.value} concluida com sucesso`


    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}

