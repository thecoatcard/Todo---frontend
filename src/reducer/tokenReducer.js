// tokenReducer.js
function tokenReducer(userToken, action) {
    console.log("tokenReducer", action); // Include action in console log for better debugging

    switch (action.type) {
        case "SET_TOKEN":
            return action.payload;

        case "UNSET_TOKEN":
            return null;

        default:
            return userToken; // Maintain the current state if the action is unknown
    }
}

export default tokenReducer;
