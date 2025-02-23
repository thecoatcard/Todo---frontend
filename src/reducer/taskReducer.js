// taskReducer.js
function taskReducer(tasks, action) {
    console.log("taskReducer", action); // Include action in console log for better debugging

    switch (action.type) {
        case "ADD_TASK":
            return [
                ...tasks,
                {
                    title: action.title,
                    description: action.description,
                    completed: false,
                    createdAt: new Date().toISOString(), // Add createdAt timestamp
                }
            ];

        case "SET_TASK":
            return action.payload;

        case "REMOVE_TASK":
            return tasks.filter((_, index) => index !== action.id); // Use _ for unused parameter

        case "MARK_DONE":
            return tasks.map((task, index) =>
                index === action.id ? { ...task, completed: !task.completed } : task
            );

        default:
            throw new Error(`Unknown action type: ${action.type}`); // Improved error message
    }
}

export default taskReducer;
