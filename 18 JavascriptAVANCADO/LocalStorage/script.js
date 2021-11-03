/*

LOCAL STORAGE

*/

const tarefas = [
    {tarefa: 'estudar nodejs'},
    {tarefa: 'estudar js'},
    {tarefa: 'estudar react'},
]

const tarefasjson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasjson)

const listasalvas = localStorage.getItem('tarefas')

const listatarefaobj = JSON.parse(listasalvas)

console.log(listatarefaobj)