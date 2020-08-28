import { API, graphqlOperation } from '@aws-amplify/api'

export const getAllEvents = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await API.graphql(graphqlOperation(listWGCEvents, { limit: 20 }))
      // console.log(results.data.listEvents.items)
      resolve (transformEvents(results.data.listEvents.items))
    } catch (err) {
      reject(err)
    }
  })
}

const listWGCEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        tagline
        startDate
        endDate
        location
        primaryImage
        secondaryImage
        registrationType
        registeredUsers {
          items {
              userId
          }
        }
        invitedUsers
        teams {
          items {
            team {
              name
              avatar
            }
          }
        }
      }
      nextToken
    }
  }
`;

const transformEvents = input => {
  return input.map(event => ({
    id: event.id,
    description: event.description,
    endDate: event.endDate,
    invitedUsers: event.invitedUsers,
    location: event.location,
    name: event.name,
    primaryImage: event.primaryImage,
    registeredUsers: event.registeredUsers.items,
    registrationType: event.registrationType,
    secondaryImage: event.secondaryImage,
    startDate: event.startDate,
    tagline: event.tagline,
    teams: event.teams.items
  }))
}