// src/shared/ui/TaskItem.tsx
import React from 'react';
import { Task } from "../model/TaskContext";

interface TaskItemProps {
  task: Task
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div >
      <input type="checkbox"/>
      {task.name}
    </div>
  )
};
