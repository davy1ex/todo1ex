import React from 'react'
import {TaskItem} from "../../../entities/task/ui/TaskItem";


export const TaskList = ({tasks}) => {
    return (
        <>
            {tasks.map((task) =>
                <TaskItem key={task.id} task={task}/>
            )}
        </>
    )
}