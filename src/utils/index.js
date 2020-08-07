export const addToArrayUnique = (arr, item) => {
    return arr.find(element => element === item) ? [...arr] : [...arr, item]
}

export const convertUsPhoneToE164 = phone => `+1${phone}`