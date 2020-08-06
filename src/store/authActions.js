import * as actions from './actionTypes'
import { Auth } from '@aws-amplify/auth'

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export async function login (username, password, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: 'LOGIN' })
        dispatch({ type: actions.SET_LOGIN_MESSAGE, message: '' })
        const response = await Auth.signIn(username, password)
        console.log('RESPONSE', response)
    } catch (error) {
        console.log(error)
        let message 
        if (error.code === 'UserNotFoundException') {
            message = error.message
        } else {
            message = 'Unable to login, please try again later'
        }
        dispatch({ type: actions.SET_LOGIN_MESSAGE, message })
    } finally {
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: 'LOGIN' }) 
    }
}


