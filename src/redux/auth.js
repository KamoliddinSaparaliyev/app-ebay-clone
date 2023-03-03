const initialState = {
    userData: {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return { name: action }
        default:
            return state
    }

}

export default authReducer