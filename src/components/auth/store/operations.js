export function loginSuccess (state, action) {
    return {
        ...state,
        username: action.username,
        authenticated: true,
        loginMsg: ''
    }
}

export function registerSuccess (state, action) {
    return {
        ...state,
        username: action.username,
        registerMsg: '',
        confirmSignUpMsg: '',
        authPage: 'confirmSignUp'
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