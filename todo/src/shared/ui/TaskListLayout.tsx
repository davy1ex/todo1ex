import React from 'react'

interface TaskItemProps {
    task: {
        id: number;
        name: string;
    };
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    return <li>{task.name}</li>
}


