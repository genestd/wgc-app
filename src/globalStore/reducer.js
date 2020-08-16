import INITIAL_STATE from './initialState'
import { SET_LOGIN, SET_USER, UPDATE_USER , RESET_STATE } from './globalActionTypes'

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, loggedIn: action.payload}
        case SET_USER:
            return { ...state, user: action.user }
        case UPDATE_USER:
            return { ...state, user: { ...state.user, ...action.user }}
        case RESET_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}

export default reducer