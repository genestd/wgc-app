import { API, graphqlOperation } from '@aws-amplify/api'
import * as queries from '../graphql/queries'
import { SET_LOGIN, SET_USER } from './globalActionTypes'

export const loginHandler = async (username, globalDispatch) => {
    try {
        globalDispatch({ type: SET_LOGIN, payload: true })
        const result = await API.graphql(graphqlOperation(queries.getUser, { id: username }))
        globalDispatch({ type: SET_USER, user: result.data.getUser })
    } catch (error) {
        console.log(error)
        // TODO handle error!
    }
}