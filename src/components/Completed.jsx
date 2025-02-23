import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import CompletedTask from "./CompletedTask";

function Completed() {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-container">
            {tasks.length !== 0 ? (
                tasks.map((task) => (
                    task.completed && (
                        <CompletedTask
                            key={task.id} // Use unique ID if available
                            task={task}
                        />
                    )
                ))
            ) : (
                <h1 className="no-task-message">No Completed Tasks Found</h1>
            )}
        </div>
    );
}

export default Completed;
