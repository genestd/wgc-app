import { addToArrayUnique } from "../utils"

export const registerUserSuccess = (state, action) => {
    return {
        ...state,
        sessionRegistrations: state.sessionRegistrations.concat(action.event.eventId),
        events: state.events.map(event => {
            if (event.id !== action.event.eventId) {
                return event
            }
            return {
                ...event,
                registeredUsers: {
                    items: addToArrayUnique(event.registeredUsers.items || [], { userId: action.event.userId })
                }
            }
        })
    }
}