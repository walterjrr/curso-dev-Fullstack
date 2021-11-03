/*

ASSINCRONO VS SINCRONO

*/

function primeira(){
    console.log('primeira')
    for(let index = 0; index < 100; index++){//sincrono

    }
}

function segunda(){
    console.log('segunda')
}

setTimeout(primeira, 2000) //assincrono

primeira()//sincrono
segunda()