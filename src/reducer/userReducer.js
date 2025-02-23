// userReducer.js
function userReducer(user, action) {
    console.log("userReducer", action); // Include action in console log for better debugging

    switch (action.type) {
        case "SET_USER":
            return action.payload;

        case "UNSET_USER":
            return {}; // Return an empty object instead of null for consistency

        default:
            return user; // Maintain the current state if the action is unknown
    }
}

export default userReducer;
