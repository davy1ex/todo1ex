import {useState} from 'react'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            console.log('inputed ' + text)

            setTodos(
                [
                    ...todos,
                    {
                        id: new Date().toISOString(),
                        text: text,
                        completed: false,
                    }])
            console.log('and now todos is: ' + todos)
            console.log(todos)
        }
        setText('')


    }

    function toggleTodoCompleted(id) {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    function removeTodo(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }


    return (
        <div className={'App'}>
            <h1>Todo1ex</h1>
            <p>One task, One check</p>
            <label>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            addTodo();
                        }
                    }}
                />
                <button onClick={addTodo}>Add</button>
            </label>

            <div className={'tasks-container'}>
                {
                    todos.map(todo =>
                        <div className={'tasks-item'} key={todo.id}>
                            <input
                                type={'checkbox'}
                                checked={todo.completed}
                                onChange={() => {
                                    toggleTodoCompleted(todo.id)
                                }}>
                            </input>
                            {todo.text}
                            <div className={'task-remove'} onClick={() => {removeTodo(todo.id)}}>
                                |x|
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App
