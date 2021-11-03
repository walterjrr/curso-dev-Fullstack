/*

Hoisting (erguer)

hoisting é o comportamento padrao do javascript de mover as declaracoes para o topo de um escoopo

*/

function teste(){
    outrafuncao() //nao é uma boa prática

    function outrafuncao(){
        console.log('ok sou a outa funcao')
    }
}

teste()