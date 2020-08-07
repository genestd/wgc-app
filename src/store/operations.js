export function loginSuccess (state, action) {
    return {
        ...state,
        user: action.user,
        loggedIn: true,
        loginMessage: ''
    }
}