import React from 'react'
import { Text } from 'react-native'
import * as actions from './actionTypes'
import { Auth } from '@aws-amplify/auth'
import { convertUsPhoneToE164 } from '../utils'

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export async function login (username, password, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.LOGIN })
        dispatch({ type: actions.SET_LOGIN_MSG, message: '' })
        const response = await Auth.signIn(username, password)
        console.log('RESPONSE', response)
    } catch (error) {
        console.log(error)
        if (error.code === 'UserNotConfirmedException') {
            return dispatch({ type: actions.CHANGE_AUTH_PAGE, payload: 'confirmRegistration'})
        }
        let message 
        if (error.code === 'UserNotFoundException' || error.code === 'NotAuthorizedException') {
            message = error.message
        } else {
            message = 'Unable to login, please try again later'
        }
        dispatch({ type: actions.SET_LOGIN_MSG, message })
    } finally {
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.LOGIN }) 
    }
}

export async function register (username, password, email, phone, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.REGISTER })
        dispatch({ type: actions.SET_REGISTER_MSG, message: '' })
        const response = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                phone_number: convertUsPhoneToE164(phone)
            }
        })
        console.log('Sign Up RESPONSE', response)
        dispatch({ type: actions.CHANGE_AUTH_PAGE, payload: 'confirmRegistration'})
    } catch (error) {
        console.log(error)
        let message 
        if (error.code === 'UsernameExistsException') {
            message = error.message
        } else {
            message = 'Unable to register, please try again later'
        }
        dispatch({ type: actions.SET_REGISTER_MSG, message })
    } finally {
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.REGISTER }) 
    }
}

export async function confirmRegistration (username, code, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.CONFIRM_SIGN_UP })
        dispatch({ type: actions.SET_CONFIRM_SIGN_UP_MSG, message: '' })
        const response = await Auth.confirmSignUp(username, code)
        console.log('Confirm Sign Up RESPONSE', response)
        dispatch({ type: actions.CONFIRM_SIGN_UP_SUCCESS, username })
        dispatch({ type: actions.CHANGE_AUTH_PAGE, payload: 'login'})
    } catch (error) {
        console.log(error)
        let message 
        if (error.code === 'UsernameExistsException' || error.code === 'NotAuthorizedException') {
            message = error.message
        } else {
            message = 'Unable to confirm registration, please try again later'
        }
        dispatch({ type: actions.SET_CONFIRM_SIGN_UP_MSG, message })
    } finally {
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.CONFIRM_SIGN_UP }) 
    }
}

export function validateInput (type, value, setStatus, setCaption, compareValue) {
    let valid = true
    switch (type) {
        case 'username':
            if (value.length < 3) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Username must be 3 characters</Text>)
            } else {
                if (!value.match(/^[a-z0-9._-]{1,}$/igm)) {
                    valid = false
                    setStatus('danger')
                    setCaption(<Text>Username can only contain letters, numbers or ". - _"</Text>)    
                }
            }
            break
        case 'password':
            if (value.length < 8) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Password must be 8 characters</Text>)
            }
            break
        case 'confirmPassword':
            if (value !== compareValue) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Passwords must match</Text>)
            }
            break
        case 'phone':
            if (!value.match(/^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/igm)) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Enter valid number with area code</Text>)    
            }
            break
        case 'email':
            if (!value.match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/)) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Enter valid email address</Text>)    
            }
            break
        case 'confirmationCode':
            if (value.length !== 6) {
                valid = false
                setStatus('danger')
                setCaption(<Text>Confirm code is 6 characters</Text>)
            }
            break
    }
    return valid
}

export function resetInput (setStatus, setCaption) {
    setStatus('basic')
    setCaption(null)
}