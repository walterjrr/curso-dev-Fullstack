

let menuMobile = document.querySelector('.menuMobile')
let botaomenu = document.querySelector('.botaomenu')

let aberto = false //flag


function abrirOuFcharmenu() {

    if (aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        botaomenu.innerText = 'Abrir Menu'

    }else if (aberto === false){
        aberto = true
        menuMobile.classList.add('aberto')
        botaomenu.innerText = 'Fechar Menu'
    }
}