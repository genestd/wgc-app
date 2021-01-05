import { API, graphqlOperation } from '@aws-amplify/api'
import { Storage } from '@aws-amplify/storage'
import { Cache } from 'aws-amplify'
import { compareDesc, parseISO } from 'date-fns'
import * as mutations from '../graphql/mutations'
import * as actions from './globalActionTypes'
import * as WGCUserQueries from '../services/db/queries/users'
import * as WGCUserMutations from '../services/db/mutations/user'
import * as WGCEventQueries from '../services/db/queries/events'
import * as WGCEventMutations from '../services/db/mutations/event'
import * as WGCTeamQueries from '../services/db/queries/teams'
import { EVENT_SCREENDATA_KEY } from '../constants/app'

export const authEventHandler = async (payload, globalDispatch) => {
    try {
        if (payload.event === 'signIn') {
            // console.log('Payload', payload)
            globalDispatch({ type: actions.SET_LOGIN, payload: true })
            const user = await WGCUserQueries.getUserById(payload.username)
            globalDispatch({ type: actions.SET_USER, user })
        } else if (payload.event === 'signOut') {
            await Cache.clear()
            globalDispatch({ type: actions.RESET_STATE })
        } else {
            console.log('Unknown auth event', payload.event)
        }
    } catch (error) {
        console.log(error)
        // TODO handle error!
    }
}

/*
* This function fetches data for the Events screen. It will try to use cached data
* if possible, or store returned data in the cache.
*
* @param globalDispatch - dispatch function for the main app context
* @param ignoreCache - boolean value determines whether to check cache
*/
export const fetchEvents = async (globalDispatch, ignoreCache = false) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.FETCH_EVENTS })
        let events = null
        if (!ignoreCache) {
            events = await Cache.getItem(EVENT_SCREENDATA_KEY)
        }
        if (!events) {
            events = await WGCEventQueries.getAllEvents()
        }
        events.sort((a, b) => compareDesc(parseISO(a.startDate), parseISO(b.startDate)))
        globalDispatch({ type: actions.FETCH_EVENTS_SUCCESS, items: events })
        await Cache.setItem(EVENT_SCREENDATA_KEY, events)
    } catch (err) {
        // TODO: handle error
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

export const updateUserData = async (user, mutations, globalDispatch) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.UPDATE_USER })
        if (mutations.avatar) {
            const result = await Storage.put(`${user}_avatar`, mutations.avatar, { level: 'public'})
            mutations.avatar = result.key
        }
        await API.graphql(graphqlOperation(WGCUserMutations.updateWGCUser, { input: {
            id: user,
            ...mutations
        }}))
        globalDispatch({ type: actions.UPDATE_USER, user: mutations})
    } catch (err) {
        console.log(err)
    } finally {
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.UPDATE_USER })
    }
}

export const addGameToEvent = async (event, games, globalDispatch) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.UPDATE_EVENT })
        await API.graphql(graphqlOperation(WGCEventMutations.updateWGCEvent, { input: {
            id: event,
            games
        }}))
        globalDispatch({ type: actions.ADD_GAME_TO_EVENT, event, games })
    } catch (err) {
        console.log(err)
    } finally {
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.UPDATE_EVENT })
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