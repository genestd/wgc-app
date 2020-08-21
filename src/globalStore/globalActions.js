import { API, graphqlOperation } from '@aws-amplify/api'
import { compareDesc, parseISO } from 'date-fns'
import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
import * as actions from './globalActionTypes'
import * as WGCEventQueries from '../services/db/queries/events'

export const loginHandler = async (payload, globalDispatch) => {
    try {
        if (payload.event === 'signIn') {
            // console.log('Payload', payload)
            globalDispatch({ type: actions.SET_LOGIN, payload: true })
            const result = await API.graphql(graphqlOperation(queries.getUser, { id: payload.username }))
            globalDispatch({ type: actions.SET_USER, user: result.data.getUser })
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
        const result = await API.graphql(graphqlOperation(WGCEventQueries.listWGCEvents, { limit: 10}))
        result.data.listEvents.items.sort((a, b) => compareDesc(parseISO(a.startDate), parseISO(b.startDate)))
        console.log(result.data.listEvents.items, result)
        globalDispatch({ type: actions.FETCH_EVENTS_SUCCESS, items: result.data.listEvents.items })
    } catch (err) {
        console.log(err)
    } finally {
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.FETCH_EVENTS })
    }
}

export const registerUserForEvent = async (user, event, globalDispatch) => {
    try {
        globalDispatch({ type: actions.ADD_PENDING_ACTION, actionType: actions.REGISTER_USER })
        if (!Array.isArray(event.registeredUsers)) {
            event.registeredUsers = []
        }
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