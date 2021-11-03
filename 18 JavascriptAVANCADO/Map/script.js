const clientes = [
    {Name: 'Fulano', lastname: 'Da Silva'},
    {Name: 'Ciclano', lastname: 'Santos'},
    {Name: 'Beltrano', lastname: 'Pereira'},
]

let clientesFinal = []
clientes.forEach(function(clientes){
    clientesFinal.push(clientes.Name + ' ' + clientes.lastname)
})

console.log(clientesFinal)

//map sempre ira montar um array e percorrendo
const clientesfinalMap = clientes.map(clientes => clientes.Name + ' --- ' + clientes.lastname //sempre retornar / o retorno esta implicito
)

console.log(clientesfinalMap)