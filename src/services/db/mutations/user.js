export const updateWGCUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
  }`