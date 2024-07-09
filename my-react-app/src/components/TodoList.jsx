import {useSelector} from "react-redux";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
    const todos = useSelector(state => state.todos.todos)
    return (
        <div className={'tasks-container'}>
            {
                todos.map(todo =>
                    <div className={'tasks-item'} key={todo.taskId}>
                        < TodoItem
                            taskId={todo.taskId}
                            {...todo}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default TodoList