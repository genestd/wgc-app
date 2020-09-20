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

export const handleEventUpdate = (state, action) => {
    return {
        ...state,
        events: state.events.map(event => {
            if (event.id === action.event.id) {
                return action.event
            }
            return event
        })
    }
}

export const addGameToEventSuccess = (state, action) => {
    return {
        ...state, 
        events: state.events.map(event => {
            if (event.id === action.event) {
                return {
                    ...event,
                    games: action.games
                }
            }
            return event

        })
    }
}

export const handleNewEventTeam = (state, action) => {
    return {
        ...state,
        events: state.events.map(event => {
            if (event.id === action.data.eventId) {
                return {
                    ...event,
                    teams: event.teams.concat(action.data.team)
                }
            }
            return event
        })
    }
}