import { observer } from 'mobx-react-lite'
const ToDoItem = observer(({item}) => {

    const renameToDo = () => {
        item.text = prompt('change text', item.text) || item.text
    }

    return <div>
        <li>
            <input
                type="checkbox"
                checked = {item.completed}
                onChange={() => item.completed = !item.completed}
            />
            {
            item.completed
                ?
                <span style={{textDecoration:"line-through"}}>{item.text}</span>
                :
                <span onDoubleClick={renameToDo}>{item.text}</span>
            }
        </li>
    </div>
})

export default ToDoItem