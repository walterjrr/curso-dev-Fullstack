let quadrado = document.querySelector('.quadrado')

function minhafuncao(evento){
    console.log(evento.key)
}

//quadrado.onclick = minhafuncao

//quadrado.onmousemove = minhafuncao

//quadrado.onmouseenter = minhafuncao

//quadrado.onmouseout = minhafuncao

//window.addEventListener('resize', minhafuncao)

window.addEventListener('keypress', minhafuncao)