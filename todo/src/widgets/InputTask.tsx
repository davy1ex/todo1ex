import React, { useState } from 'react'

export const InputTask = ({addTask}) => {
    const [taskName, setTaskName] = useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && taskName.trim() !== '') {
          addTask(taskName);
          setTaskName('');
        }
      };
    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a new task"
            />
        </div>
    )
}