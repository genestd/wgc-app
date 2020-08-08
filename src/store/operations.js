export function loginSuccess (state, action) {
    return {
        ...state,
        username: action.user,
        loggedIn: true,
        loginMessage: ''
    }
}

export function registerSuccess (state, action) {
    return {
        ...state,
        username: action.payload,
        registerMessage: '',
        confirmSignUpMsg: 'Enter code from email',
        authPage: 'confirmRegistration'
    }
}