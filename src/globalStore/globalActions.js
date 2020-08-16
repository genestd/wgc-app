import { API, graphqlOperation } from '@aws-amplify/api'
import * as queries from '../graphql/queries'
import { RESET_STATE, SET_LOGIN, SET_USER } from './globalActionTypes'

export const loginHandler = async (payload, globalDispatch) => {
    console.log(payload)
    try {
        if (payload.event === 'signIn') {
            console.log('Payload', payload)
            globalDispatch({ type: SET_LOGIN, payload: true })
            const result = await API.graphql(graphqlOperation(queries.getUser, { id: payload.username }))
            globalDispatch({ type: SET_USER, user: result.data.getUser })
        } else {
            globalDispatch({ type: RESET_STATE })
        }
    } catch (error) {
        console.log(error)
        // TODO handle error!
    }
}