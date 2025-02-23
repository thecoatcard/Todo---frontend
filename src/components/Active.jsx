import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function Active() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-container">
            {tasks.length !== 0 ? (
                tasks.map((task, index) => (
                    !task.completed && (
                        <Task
                            key={task.id} // Use unique ID if available
                            task={task}
                            id={task.id}
                        />
                    )
                ))
            ) : (
                <h1 className="no-task-message">No Active Tasks Found</h1>
            )}
        </div>
    );
}

export default Active;
