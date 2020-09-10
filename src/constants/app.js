export const PRIVATE = 'PRIVATE'
export const PUBLIC = 'PUBLIC'
export const EVENT_FILTERS = {
    all: (event) => true,
    public: (event) => event.registrationType === PUBLIC,
    user: (event, currentUser) => event.registeredUsers.find(user => user.userId === currentUser)
}