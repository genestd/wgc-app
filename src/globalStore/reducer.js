import INITIAL_STATE from './initialState'
import * as actions from './globalActionTypes'
import { addToArrayUnique } from '../utils'
import { registerUserSuccess } from './operations'

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case actions.ADD_PENDING_ACTION:
            return {...state, pendingActions: addToArrayUnique(state.pendingActions, action.actionType)}
        case actions.REMOVE_PENDING_ACTION:
            return {...state, pendingActions: state.pendingActions.filter(item => item !== action.actionType)}
        case actions.SET_LOGIN:
            return {...state, loggedIn: action.payload}
        case actions.SET_USER:
            return { ...state, user: action.user }
        case actions.UPDATE_USER:
            return { ...state, user: { ...state.user, ...action.user }}
        case actions.REGISTER_USER_SUCCESS: 
            return registerUserSuccess(state, action)
        case actions.FETCH_EVENTS_SUCCESS:
            return { ...state, events: action.items }
        case actions.FETCH_TEAMS_SUCCESS:
            return { ...state, user: { ...state.user, teams: action.teams }}
        case actions.RESET_STATE:
            return INITIAL_STATE
        
        default:
            return state
    }
}

export default reducer