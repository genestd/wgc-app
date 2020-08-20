import { addToArrayUnique } from "../utils"

export const registerUserSuccess = (state, action) => {
    return {
        ...state,
        events: state.events.map(event => {
            if (event.id !== action.event.eventId) {
                return event
            }
            return {
                ...event,
                registeredUsers: {
                    ...event.registeredUsers,
                    items: addToArrayUnique(event.registeredUsers.items || [], { userId: action.event.userId })
                }
            }
        })
    }
}