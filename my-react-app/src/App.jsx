import {useState} from 'react'
import {useDispatch} from 'react-redux';

import {addTodo} from './store/todoSlice'

import './App.css'
import TodoInputField from "./components/TodoInputField.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    }


    return (
        <div className={'App'}>
            <h1>Todo1ex</h1>
            <p>One task, One check</p>
            
            <label>
                < TodoInputField text={text} handleInput={setText} handleSubmit={addTask} />
                <button onClick={addTask}>Add</button>
            </label>

            < TodoList />
        </div>
    )
}

export default App
