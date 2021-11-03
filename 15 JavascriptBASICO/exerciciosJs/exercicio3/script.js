
function entrar(){


    let inputnome = prompt('qual seu nome?')

    let inputidade = prompt('qual sua idade?')

    let idade = parseInt(inputidade)

    if (inputnome === '' || inputidade === ''){
        alert('preencha os dados corretamente')
    }else
    {    
        let maiorOuMenor

        if (idade >= 18){
            maiorOuMenor = 'Maior'
        } else{
            maiorOuMenor = 'Menor'
        }


        let compararnome = ''

        if (inputnome === 'thiago' || inputnome === 'Thiago'){
            compararnome = ' e é o professor!'
        }

        let mensagem = `Olá ${inputnome}, você é ${maiorOuMenor} de idade!`



        document.querySelector('#mensagem').innerHTML = mensagem
        document.querySelector('#compararnome').innerHTML = compararnome
    }
}