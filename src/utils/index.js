import { Hub } from '@aws-amplify/core'

export const addToArrayUnique = (arr, item) => {
    return arr.find(element => element === item) ? [...arr] : [...arr, item]
}

export const convertUsPhoneToE164 = phone => `+1${phone}`

export const addHubListeners = (options) => {
    Hub.listen('auth', options.auth)
    Hub.listen('WGCAuth', options.WGCAuth)
}

export const removeHubListeners = (options) => {
    Hub.remove('auth', options.auth)
    Hub.remove('WGCAuth', options.WGCAuth)
}
