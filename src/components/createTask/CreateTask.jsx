import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateTask() {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!title.trim()) {
            toast.error("Title is required!", { className: 'toast shake' });
            return;
        }

        setIsLoading(true);

        try {
            await axios.post("/task/addTask", { title, description }, {
                headers: { Authorization: `Bearer ${userToken}` }
            });

            dispatch({ type: "ADD_TASK", title, description });
            toast.success("Task added successfully!", { className: 'toast fade-in' });
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error(error);
            toast.error("Failed to add task!", { className: 'toast shake' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-5">Create New Task</h2>
                <form onSubmit={handleAdd} className="space-y-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Task Title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300 input-focus"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Task Description (Optional)"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all duration-300 input-focus"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all disabled:bg-indigo-400 flex justify-center items-center button-hover"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
                        ) : null}
                        {isLoading ? "Adding..." : "Add Task"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;
