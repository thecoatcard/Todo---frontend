import React from "react";
import moment from "moment";

function CompletedTask({ task }) {
    return (
        <div className='completed-task bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-between gap-4 mb-3'>
            <div className="task-info text-slate-900 text-sm w-10/12">
                <h4 className="task-title text-lg capitalize">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <div className='italic opacity-60'>
                    {task.createdAt ? (
                        <p>{moment(task.createdAt).fromNow()}</p>
                    ) : (
                        <p>Just now</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompletedTask;
