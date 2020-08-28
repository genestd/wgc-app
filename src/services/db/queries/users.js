import { API, graphqlOperation } from '@aws-amplify/api'

export const getUserById = userId => {
  return new Promise(async (resolve, reject) => {
    try {
        const result = await API.graphql(graphqlOperation(
            getWGCUser, { 
                id: userId
            }
        ))
        const user = transformUser(result.data.getUser)
        resolve(user)
    } catch (err) {
        reject(err)
    }
})
}

const getWGCUser = /* GraphQL */ 
`query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      screenName
      email
      bio
      avatar
      events {
        items {
          eventId
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          team {
            id
            name
            avatar
            events {
              items {
                event {
                  name
                }
              }
            }
          }
        }
        nextToken
      }
    }
  }
`

const transformUser = input => {
  return {
    id: input.id,
    screenName: input.screenName,
    email: input.email,
    bio: input.bio,
    avatar: input.avatar,
    events: input.events.items || [],
    teams: transformTeamUser(input.teams.items || [])
  }
}

const transformTeamUser = input => {
  return input.map(teamUser => ({
    id: teamUser.id,
    team: transformTeam(teamUser.team)
  }))
}

const transformTeam = input => {
  return {
    id: input.id,
    name: input.name,
    avatar: input.avatar,
    events: input.events.items
  }
}