import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                taskId: new Date().toISOString(),
                taskTitle: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.taskId !== action.payload.taskId);
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
            // state.todos = state.todos.map(todo =>
            //     todo.taskId === action.payload.taskId ? {...todo, completed: !todo.completed} : todo
            // )
        }
    }
})

export const{addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;
export default todoSlice.reducer;