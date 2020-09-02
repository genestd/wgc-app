import { API, graphqlOperation } from '@aws-amplify/api'
import { compareDesc, parseISO } from 'date-fns'
import * as mutations from '../graphql/mutations'
import * as actions from './globalActionTypes'
import * as WGCUserQueries from '../services/db/queries/users'
import * as WGCEventQueries from '../services/db/queries/events'
import * as WGCTeamQueries from '../services/db/queries/teams'

export const loginHandler = async (payload, globalDispatch) => {
    try {
        if (payload.event === 'signIn') {
            // console.log('Payload', payload)
            globalDispatch({ type: actions.SET_LOGIN, payload: true })
            const user = await WGCUserQueries.getUserById(payload.username)
            globalDispatch({ type: actions.SET_USER, user })
        } else {
            globalDispatch({ type: actions.RESET_STATE })
        }
    } catch (error) {
        console.log(error)
        // TODO handle error!
    }
}

export const fetchEvents = async (globalDispatch) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.FETCH_EVENTS })
        const events = await WGCEventQueries.getAllEvents()
        events.sort((a, b) => compareDesc(parseISO(a.startDate), parseISO(b.startDate)))
        globalDispatch({ type: actions.FETCH_EVENTS_SUCCESS, items: events })
    } catch (err) {
        console.log(err)
    } finally {
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.FETCH_EVENTS })
    }
}

export const registerUserForEvent = async (user, event, globalDispatch) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.REGISTER_USER })
        const result = await API.graphql(graphqlOperation(mutations.createEventUsers, { input: {
            eventId: event.id,
            userId: user.id
        } } ))
        globalDispatch({ type: actions.REGISTER_USER_SUCCESS, event: result.data.createEventUsers })
    } catch (err) {
        console.log(err)
    } finally {
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.REGISTER_USER })
    }
}

// export const fetchTeams = async (userId, globalDispatch) => {
//     try {
//         globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.FETCH_TEAMS })
//         const teams = await WGCTeamQueries.getTeamsByUser(userId)
//         globalDispatch({ type: actions.FETCH_TEAMS_SUCCESS, teams })
//     } catch (err) {
//         console.log(err)
//     } finally {
//         globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.FETCH_TEAMS })
//     }
// }