import { useState, useEffect } from 'react';
import { fetchTasks } from './GetTasks';
import { Task } from '../../../entities/task/model/TaskContext';


export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTasks = () => {
      try {
        const tasks = fetchTasks();
        setTasks(tasks);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  return { tasks, loading, error };
};