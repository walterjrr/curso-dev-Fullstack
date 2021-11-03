
//Seletor por Id
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'


//Seletor por Tag
document.querySelector('a').innerText = ' <i>teste ancora</i>'

//Selecionando mais de 1 item por Tag
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){  //funcao anonima / Callback
    elemento.innerHTML = 'teste'
})


//Selecionando mais de 1 item por classe
let boxes = document.querySelectorAll('.box')

let count = 0
boxes.forEach(function(box, index){
    count++
    box.innerHTML = 'box ' + (index + 1)
})