 
let opcao

for (let contador = 2021; contador >= 1900; contador--){
    opcao += `<Option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcao



let lista = ''

let clientes = ['junior', 'fulano', 'ciclano']

for (let contador = 0; contador <= clientes.length - 1; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaclientes').innerHTML = lista