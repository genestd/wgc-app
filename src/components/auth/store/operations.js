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
        confirmSignUpMsg: '',
        authPage: 'confirmRegistration'
    }
}

export function showSnackbar (state, action) {
    return {
        ...state,
        showAuthSnackbar: action.visible,
        snackbarContent: action.content || null,
        snackbarType: action.msgType || 'info'
    }
}