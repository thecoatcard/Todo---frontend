// Active.js or AllTask.js
import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function Active() {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {tasks.length !== 0 ? (
                tasks.map((task, index) => (
                    !task.completed && (
                        <Task
                            key={index}
                            task={task}
                            id={index} // Pass index here
                        />
                    )
                ))
            ) : (
                <h1>No Task Found</h1>
            )}
        </div>
    );
}

export default Active;
