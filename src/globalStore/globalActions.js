import { API, graphqlOperation } from '@aws-amplify/api'
import * as queries from '../graphql/queries'
import * as actions from './globalActionTypes'

export const loginHandler = async (payload, globalDispatch) => {
    console.log(payload)
    try {
        if (payload.event === 'signIn') {
            console.log('Payload', payload)
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
        const result = await API.graphql(graphqlOperation(queries.listEvents))
        globalDispatch({ type: actions.FETCH_EVENTS_SUCCESS, items: result.data.listEvents.items })
        globalDispatch({ type: actions.REMOVE_PENDING_ACTION, actionType: actions.FETCH_EVENTS })
    } catch (err) {
        console.log(err)
    }
    
}