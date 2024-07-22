import React from "react";
import {TaskNavbar} from "../../../widgets/ui/TaskNavbar";
import {InputTask} from "../../../widgets/InputTask";

import { TaskList } from "./TaskList";
import style from './TaskPage.module.css'



export function Layout({
    listName, 
    tasks
}: {
    listName: string;
    tasks: []
}) {
    return (
        <div className={style.taskPageContainer}>
            <TaskNavbar/>
            <div className={style.taskListContainer}>

                <h1>{listName}</h1>

                <hr/>
                < InputTask />
                < TaskList tasks={tasks} />
                
            </div>

        </div>
    );
}