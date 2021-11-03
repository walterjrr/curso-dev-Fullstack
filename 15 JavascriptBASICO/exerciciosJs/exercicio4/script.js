let inputtabuada = prompt('você quer qual tabuada?')

let tabuada = parseInt(inputtabuada)


let resultado

for (let contador = 1; contador <= 10; contador++){

    resultado = (contador * tabuada)

    document.write(`${tabuada} X ${contador} = ${resultado} `, '<br>')

}
//let resultado = tabuada * contador

//document.write(`${tabuada} * contador `)