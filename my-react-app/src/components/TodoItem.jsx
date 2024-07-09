import { useDispatch } from 'react-redux'
import {removeTodo, toggleTodoCompleted} from '../store/todoSlice.js'

function TodoItem({taskId, taskTitle, completed}) {
    const dispatch = useDispatch()
    return (
        <>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => {
                    dispatch(toggleTodoCompleted({taskId}))
                }}>
            </input>
            {taskTitle}
            <div className={'task-remove'} onClick={() => {
                dispatch(removeTodo({taskId}))
            }}>
                |x|
            </div>
        </>
    )
}

export default TodoItem