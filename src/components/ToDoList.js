import { observer } from 'mobx-react'
import ToDoItem from './ToDoItem'

const ToDoList = observer(({store}) => {
    const addNewTodo = () => {
        let text = prompt()
        if(text){
            store.add(text)
        }
    }
    return <div>
        <h1>ToDoList</h1>
        <button onClick={addNewTodo}>Add</button>
        <p>{store.completedTasks}/{store.todos.length}</p>
        {
            store.todos.map((elm) => {
                return <ToDoItem key = {elm.id} item = {elm} />
            })
        }
    </div>
})

export default ToDoList