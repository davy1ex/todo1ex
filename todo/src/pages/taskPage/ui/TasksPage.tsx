import React, { useEffect, useState } from 'react'
import { Layout } from './Layout'
import { fetchTasks } from '../../../features/tasks/getTasks/GetTasks'

import { useTasks } from '../../../features/tasks/getTasks/useTasks';
import { Task } from '../../../entities/task/model/TaskContext';


export const TaskPage = () => {
    const { tasks, loading, error } = useTasks()
    const [taskList, setTaskList] = useState<Task[]>(tasks);

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    const addTask = (name: string) => {
        console.log('added ', name)
        const newTask = { id: taskList.length + 1, name };
        console.log([...taskList, newTask])

        setTaskList([...taskList, newTask]);
    };
    
    return (
        <Layout
            listName={'Inbox'} // TODO take these from url
            tasks={taskList}  
            addTask={addTask}
        />

    )
}