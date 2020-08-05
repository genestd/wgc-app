import INITIAL_STATE from './initialState'
import * as actions from './actionTypes'

function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.CHANGE_AUTH_PAGE:
            return { ...state, authPage: action.payload }
        default:
            return state
    }
}

export default reducer