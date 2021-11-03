

let botaoteste = document.querySelector('#botaoteste')

let contador = 0

function cliquebotao(){
    contador ++

    console.log('mensagem 1')

    if (contador>= 5){
        botaoteste.removeEventListener('click', cliquebotao)
    }

}

//addEventListner
botaoteste.addEventListener('click', cliquebotao)




//onclick
//botaoteste.oonclick = cliquebotao
