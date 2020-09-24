export const PRIVATE = 'PRIVATE'
export const PUBLIC = 'PUBLIC'

export const EVENT_FILTERS = {
    all: (event) => true,
    public: (event) => event.registrationType === PUBLIC,
    user: (event, currentUser) => event.registeredUsers.find(user => user.userId === currentUser)
}

export const HEAD_TO_HEAD = 'Head to head'
export const TEAM_TOTAL = 'Team total points'
export const SCORING_METHODS = [
    { key: 'HEAD_TO_HEAD', value: HEAD_TO_HEAD },
    { key: 'TEAM_TOTAL', value: TEAM_TOTAL }
  ]
  
export const ROUND_ROBIN = 'Round Robin'
export const BRACKET_TYPES = [
    { key: 'ROUND_ROBIN', value: ROUND_ROBIN }
]

export const SINGLE_ELIMINATION = 'Single Elimination'
export const BEST_OF_THREE = 'Best of Three'
export const ELIMINATION_TYPES = [
    { key: 'SINGLE_ELIMINATION', value: SINGLE_ELIMINATION },
    { key: 'BEST_OF_THREE', value: BEST_OF_THREE }
]