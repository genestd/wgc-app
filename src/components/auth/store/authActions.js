import React from 'react'
import { Text } from 'react-native'
import { Auth } from '@aws-amplify/auth'
import API, { graphqlOperation } from '@aws-amplify/api'
import { Hub } from '@aws-amplify/core'
import * as actions from './actionTypes'
import * as mutations from '../../../graphql/mutations'
import { convertUsPhoneToE164 } from '../../../utils'

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export async function validateUserSession() {
    return new Promise((resolve, reject) => {
        Auth.currentAuthenticatedUser()
            .then(result => {
                Hub.dispatch('WGCAuth', { event: 'signIn', username: result.username })
                resolve(result)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}

export function authListener (data) {
    if (data && data.payload) {
        console.log(data.payload)
        if (data.payload.event === 'signIn') {
            validateUserSession()
        } else if (data.payload.event === 'signOut') {
            Hub.dispatch('WGCAuth', { event: data.payload.event })
        }
    }
}

/*
* Note that the magic for login happens elsewhere:
* Auth emits an event at signIn, and a listener for that event
* will flip the switch
*/
export async function login (username, password, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.LOGIN })
        dispatch({ type: actions.SET_LOGIN_MSG, message: '' })
        const response = await Auth.signIn(username, password)
        
        dispatch({ type: actions.LOGIN_SUCCESS, username: response.username })
    } catch (error) {
        console.log(error)
        if (error.code === 'UserNotConfirmedException') {
            dispatch({ type: actions.SHOW_SNACKBAR, visible: true, msgType: 'warning', content: 'Your account is not confirmed. Enter code from email, or request new code.'})
            dispatch({ type: actions.SAVE_USERNAME, username })
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
        // console.log('Sign Up RESPONSE', response)
        // const apiResult = await API.graphql(graphqlOperation(mutations.createUser, {input: {
        //     id: username
        // }}))
        // // console.log('Api Response', apiResult)
        dispatch({ type: actions.SHOW_SNACKBAR, visible: true, msgType: 'success', content: 'Username registered...please confirm your email'})
        dispatch({ type: actions.REGISTER_SUCCESS, username })
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
        dispatch({ type: actions.SHOW_SNACKBAR, visible: true, msgType: 'success', content: `You're confirmed - please sign in`})
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

export async function resendConfirmCode (username, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.CONFIRM_SIGN_UP })
        dispatch({ type: actions.SET_CONFIRM_SIGN_UP_MSG, message: '' })
        const response = await Auth.resendSignUp(username)
        console.log('Resend Confirm RESPONSE', response)
        dispatch({ type: actions.SHOW_SNACKBAR, visible: true, msgType: 'success', content: 'Code sent to email for this user'})
    } catch (error) {
        console.log(error)
        let message = 'Unable to confirm registration, please try again later'
        if (error.code === 'InvalidParameterException') {
            message = error.message
        }
        dispatch({ type: actions.SET_CONFIRM_SIGN_UP_MSG, message })
    } finally {
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.CONFIRM_SIGN_UP }) 
    }
}

export async function getResetPasswordCode (username, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.GET_PW_RESET_CODE })
        const response = await Auth.forgotPassword(username)
        dispatch({ type: actions.CHANGE_AUTH_PAGE, payload: 'resetPassword'})
        dispatch({ type: actions.SAVE_USERNAME, username })
        dispatch({ type: actions.SHOW_SNACKBAR, visible: true, msgType: 'success', content: 'Use the emailed code to reset your password'})
    } catch (error) {
        console.log(error)
        let message
        if (error.code === 'UserNotFoundException') {
            message = 'User does not exist'
        } else {
            message = 'Unable to reset password at this time'
        }
        dispatch({ type: actions.SET_FORGOT_PW_MSG, message })
    } finally {        
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.GET_PW_RESET_CODE })
    }
}

export async function resetPassword(username, code, newPassword, dispatch) {
    try {
        dispatch({ type: actions.ADD_ASYNC_ACTION, action: actions.RESET_PASSWORD })
        const response = await Auth.forgotPasswordSubmit(username, code, newPassword)
        dispatch({ type: actions.CHANGE_AUTH_PAGE, payload: 'login'})
    } catch (error) {
        console.log(error)
        let message
        if (error.code === 'CodeMismatchException') {
            message = error.message
        } else {
            message = 'Unable to reset password at this time'
        }
        dispatch({ type: actions.SET_RESET_PW_MSG, message })
    } finally {        
        dispatch({ type: actions.REMOVE_ASYNC_ACTION, action: actions.RESET_PASSWORD })
    }
}

export async function logout (dispatch) {
    try {
        await Auth.signOut()
        dispatch({ type: actions.LOGOUT })
    } catch (err) {
        console.log(err)
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