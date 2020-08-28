import { API, graphqlOperation } from '@aws-amplify/api'
export const getTeamsByUser = async userId => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await API.graphql(graphqlOperation(
                listWGCTeamUsers, { 
                    filter: { userId: { eq: userId } }
                }
            ))

            resolve(result.data.listTeamUsers.items)
        } catch (err) {
            reject(err)
        }
    })
}

const listWGCTeamUsers = /* GraphQL */ `
  query ListTeamUsers(
    $filter: ModelTeamUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                  id
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
`;