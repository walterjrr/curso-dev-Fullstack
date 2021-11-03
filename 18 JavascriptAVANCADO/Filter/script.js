const clientes = [
    {Name: 'Fulano', lastname: 'Da Silva', age: 30 },
    {Name: 'Ciclano', lastname: 'Santos', age: 25 },
    {Name: 'Beltrano', lastname: 'Pereira', age: 14 },
]

const clientesmaioresdeidade = clientes.filter (clientes =>  clientes.age >= 18 )


console.log(clientesmaioresdeidade)