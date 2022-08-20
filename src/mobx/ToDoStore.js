import { computed, makeObservable, observable } from 'mobx'

class ToDoStore{
    todos = [
        {text:'eat an apple', completed:false, id:101},
        {text:'read a book', completed:false, id:102},
        {text:'watch a film', completed:true, id:103},
    ]

    constructor(){
        makeObservable(this, {
            completedTasks: computed,
            todos: observable
        })
    }

    add(task) {
        this.todos.push({
            text:task,
            completed:false,
            id:Date.now()
        })
    }

    get completedTasks () {
        return this.todos.filter(a => a.completed).length
    }
}

export const store = new ToDoStore()