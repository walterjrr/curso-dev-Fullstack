

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false//flag

    //console.log(document.forms['formCadastro']['nome'].value)

    let Inputnome = document.forms['formCadastro']['nome']

    if(!Inputnome.value){
        temErro = true
        Inputnome.classList.add('inputError')

        let span = Inputnome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    }else{
        Inputnome.classList.remove('inputError')
        let span = Inputnome.nextSibling.nextSibling
        span.innerText = ''
    }


    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o email corretamente'
    }else{
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let selectcidade = document.forms['formCadastro']['cidade']

    if(!selectcidade.value){
        temErro = true
        selectcidade.classList.add('inputError')

        let span = selectcidade.nextSibling.nextSibling
        span.innerText = 'Digite a cidade corretamente'
    }else{
        selectcidade.classList.remove('inputError')
        let span = selectcidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
    
}