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

export const getSnackbarStyle = (type, theme) => {
    switch (type) {
        case 'info': 
            return {
                color: theme['color-primary-100'],
                backgroundColor: theme['color-info-500']
            }
        case 'warning': 
            return {
                color: theme['color-primary-100'],
                backgroundColor: theme['color-warning-500']
            }
        case 'danger':
            return {
                color: theme['color-primary-100'],
                backgroundColor: theme['color-danger-500']
            }
        case 'success':
            return {
                color: theme['color-primary-100'],
                backgroundColor: theme['color-success-500']
            }
        default:
            return {
                color: theme['color-primary-100'],
                backgroundColor: theme['color-info-500']
            }
    }
}

export const getFirst30Words = (str) => {
    let start = str.split(' ')
    if (start.length > 30) {
        start = start.slice(0, 31).concat('...')
    }
    return start.join(' ')
}