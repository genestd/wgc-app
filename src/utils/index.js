export const addToArrayUnique = (arr, item) => {
    return arr.find(element => element === item) ? [...arr] : [...arr, item]
}