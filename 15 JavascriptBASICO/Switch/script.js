
let diasemana = new Date().getDay()

let nomediasemana

switch(diasemana){
    case 0:
        //document.write('Hoje é domingo')
        nomediasemana = 'Domingo'
        break;
    case 1:
        nomediasemana = 'segunda'
        break;
    case 2:
        nomediasemana = 'terca'
        break;
    case 3:
        nomediasemana = 'quarta'
        break;
    case 4:
        nomediasemana = 'quinta'
        break;
    case 5:
        nomediasemana = 'sexta'
        break;
    case 6:
        nomediasemana = 'sabado'
        break;
}

document.write(`o dia da semana é ${nomediasemana}`)