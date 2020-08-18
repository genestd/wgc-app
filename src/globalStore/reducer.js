import INITIAL_STATE from './initialState'
import { SET_LOGIN, SET_USER, UPDATE_USER , RESET_STATE, ADD_PENDING_ACTION, REMOVE_PENDING_ACTION, FETCH_EVENTS_SUCCESS } from './globalActionTypes'
import { addToArrayUnique } from '../utils'

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_PENDING_ACTION:
            return {...state, pendingActions: addToArrayUnique(state.pendingActions, action.actionType)}
        case REMOVE_PENDING_ACTION:
            return {...state, pendingActions: state.pendingActions.filter(item => item !== action.actionType)}
        case SET_LOGIN:
            return {...state, loggedIn: action.payload}
        case SET_USER:
            return { ...state, user: action.user }
        case UPDATE_USER:
            return { ...state, user: { ...state.user, ...action.user }}
        case FETCH_EVENTS_SUCCESS:
            return { ...state, events: action.items }
        case RESET_STATE:
            return INITIAL_STATE
        
        default:
            return state
    }
}

export default reducer