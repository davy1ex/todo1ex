import React, { createContext, useState, ReactNode } from 'react';


export interface Task {
    id: number;
    name: string;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (name: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => {},
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, name: 'task 1' },
        { id: 2, name: 'task 2' },
        { id: 3, name: 'task 3' },
    ]);

    const addTask = (name: string) => {
        const newTask = { id: tasks.length + 1, name };
        setTasks([...tasks, newTask]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};