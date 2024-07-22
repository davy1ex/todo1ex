import React from 'react'
import { Layout } from './Layout'


export const TaskPage = () => {
    // todo
    const tasks = [
        { id: 1, name: 'task 1' },
        { id: 2, name: 'task 2' },
        { id: 3, name: 'task 3' },
    ]
    // endtodo


    return (
        <Layout
            listName={'Inbox'} // TODO take these from url
            tasks={tasks}
        />

    )
}