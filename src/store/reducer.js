import INITIAL_STATE from './initialState'
import * as actions from './actionTypes'
import { addToArrayUnique } from '../utils/index'

function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.CHANGE_AUTH_PAGE:
            return { ...state, authPage: action.payload }
        case actions.SET_LOGIN_MSG:
            return { ...state, loginMessage: action.message }
        case actions.SET_REGISTER_MSG:
            return { ...state, registerMessage: action.message }
        case actions.SET_CONFIRM_SIGN_UP_MSG:
            return { ...state, confirmSignUpMsg: action.message }
        case actions.CONFIRM_SIGN_UP_SUCCESS:
            return { ...state, user: { username: action.username } }
        case actions.ADD_ASYNC_ACTION:
            return { ...state, pendingActions: addToArrayUnique(state.pendingActions, action.action) }
        case actions.REMOVE_ASYNC_ACTION:
            return { ...state, pendingActions: state.pendingActions.filter(item => item != action.action) }
        default:
            return state
    }
}

export default reducer