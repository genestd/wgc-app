import INITIAL_STATE from './initialState'
import * as actions from './actionTypes'
import { loginSuccess, registerSuccess, showSnackbar } from './operations'
import { addToArrayUnique } from '../../../utils/index'

function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.CHANGE_AUTH_PAGE:
            return { ...state, authPage: action.payload }
        case actions.LOGIN_SUCCESS:
            return loginSuccess(state, action)
        case actions.SET_LOGIN_MSG:
            return { ...state, loginMessage: action.message }
        case actions.REGISTER_SUCCESS:
            return registerSuccess(state, action)
        case actions.SET_REGISTER_MSG:
            return { ...state, registerMessage: action.message }
        case actions.SET_CONFIRM_SIGN_UP_MSG:
            return { ...state, confirmSignUpMsg: action.message }
        case actions.CONFIRM_SIGN_UP_SUCCESS:
            return { ...state, username: action.username }
        case actions.SET_FORGOT_PW_MSG:
            return { ...state, forgotPasswordMsg: action.message }
        case actions.SET_RESET_PW_MSG:
            return { ...state, resetPasswordMsg: action.message }
        case actions.LOGOUT:
            return INITIAL_STATE
        case actions.SAVE_USERNAME:
            return { ...state, username: action.username }
        case actions.SHOW_SNACKBAR:
            return showSnackbar(state, action)
        case actions.ADD_ASYNC_ACTION:
            return { ...state, pendingActions: addToArrayUnique(state.pendingActions, action.action) }
        case actions.REMOVE_ASYNC_ACTION:
            return { ...state, pendingActions: state.pendingActions.filter(item => item != action.action) }
        default:
            return state
    }
}

export default reducer