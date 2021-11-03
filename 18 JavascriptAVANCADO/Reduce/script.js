const clientes = [
    {Name: 'Walter', score: 99},
    {Name: 'Junior', score: 38 },
    {Name: 'Alana', score: 80 },
    {Name: 'Pedro', score: 50 },
    {Name: 'Gustavo', score: 48 },
]

//let clientespass = clientes.filter(clientes => clientes.score >= 50)
//let clientesfail = clientes.filter(clientes => clientes.score <= 49)

//acc = acumulator
//curr = current

const clientesfinal = clientes.reduce((acc, curr) =>{
    if(curr.score >= 50){
        acc.pass.push(curr)
    }else {
        acc.fail.push(curr)
    }

    return acc

},{
    pass: [],
    fail: []
})

console.log(clientesfinal)




const numeros = [1, 2, 3, 4]

const numerosfinal = numeros.reduce((acc, curr) =>{
    acc += `-${curr + 1} `

    return acc
}, '')

console.log(numerosfinal)
