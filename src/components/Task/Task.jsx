import React, { useContext } from 'react';
import moment from 'moment';
import "./task.css";
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_TASK",
            id // pass the index of the task
        });
    };

    const handleMarkDone = () => {
        dispatch({
            type: "MARK_DONE",
            id // pass the index of the task
        });
    };

    return (
        <div className='bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-between gap-2 mb-3'>
            <div className="mark-done">
                <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleMarkDone}
                    checked={task.completed}
                />
            </div>
            <div className="task-info text-slate-900 text-sm w-10/12">
                <h4 className="task-title text-lg capitalize">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <div className='italic opacity-60'>
                    {task?.createdAt ? (
                        <p>{moment(task.createdAt).fromNow()}</p>
                    ) : (
                        <p>Just now</p>
                    )}
                </div>
            </div>
            <div className="remove-task text-sm text-white">
                <DeleteIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    onClick={handleRemove}
                    className="remove-task-btn bg-red-600 rounded-full border-2 shadow-2xl border-white p-1"
                />
            </div>
        </div>
    );
}

export default Task;
