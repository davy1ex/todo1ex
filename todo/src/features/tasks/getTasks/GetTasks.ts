import { Task } from '../../../entities/task/model/TaskContext';

export const fetchTasks = (): Task[] => {
  return [
    { id: 1, name: 'task 1' },
    { id: 2, name: 'task 2' },
    { id: 3, name: 'task 3' },
  ];
};