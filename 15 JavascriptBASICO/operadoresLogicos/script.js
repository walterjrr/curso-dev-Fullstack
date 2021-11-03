let inputNota1 = prompt('digite a primeira nota')
let inputNota2 = prompt('digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaminima = 7

let media = ((nota1 + nota2) / 2)

if (media >= mediaminima){
    document.write('ok, passou de ano')
}else if (media < mediaminima) {
    document.write('voce não passou de ano')
}

document.write('<br>')

if (media === 10) {
    document.write(' Parabens')
}else if (media >= mediaminima && media === 9){
    document.write(' quase lá')
}else if( media <= mediaminima && media === 6){
    document.write('precisa melhorar')
}else{
    document.write('voce é pessimo')
}

document.write(media)