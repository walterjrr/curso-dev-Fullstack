
const Main = {

    tasks: [],

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTasks()
    },

    //selecionar os elementos HTML
    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')//se eu coloacasse o let ele ficaria apenas nessa funcao
        this.$inputTask = document.querySelector('#inputTask')
        this.$List = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },
    //conectar os Eventos de Clique
    bindEvents: function(){
        //uma ligacaozinha
        const self = this
        //para cada elemento do meu array faca esta funcao
        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButtons_click
        })
    },

    getStoraged: function() {
        const tasks = localStorage.getItem('tasks')

        this.tasks = JSON.parse(tasks)
    },

    buildTasks: function(){
        let html = ''

        this.tasks.forEach(item => {
            html += `
            <li>
                <div class="check"></div>
                <label class="task">
                    ${item.task}
                </label>
                <button class="remove"></button>
            </li>
        `
        })

        this.$List.innerHTML = html
    },

    Events: {
        checkButton_click: function(e){
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if (isDone) {
                li.classList.remove('done')
            }else{
                li.classList.add('done')
            }
            
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$List.innerHTML += `
                <li>
                    <div class="check"></div>
                    <label class="task">
                        ${value}
                    </label>
                    <button class="remove"></button>
                </li>
            `

            e.target.value = ''

            this.cacheSelectors()
            this.bindEvents()

            const savedTasks = localStorage.getItem('tasks')
            const savedtaskobj = JSON.parse(savedTasks)

            const obj = [
                { task : value},
                ...savedtaskobj,
            ]

            localStorage.setItem('tasks', JSON.stringify(obj))

            }
        },

        removeButtons_click: function(e){
            let li = e.target.parentElement

            li.classList.add('remove')

            setTimeout(function(){
                li.classList.add('hidden')
            },300)
        }
    }
}

Main.init()