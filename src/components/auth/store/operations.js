export function loginSuccess (state, action) {
    return {
        ...state,
        username: action.username,
        authenticated: true,
        loginMessage: ''
    }
}

export function registerSuccess (state, action) {
    return {
        ...state,
        username: action.username,
        registerMessage: '',
        confirmSignUpMsg: 'Enter code from email',
        authPage: 'confirmRegistration'
    }
}