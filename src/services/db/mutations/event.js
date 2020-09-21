export const updateWGCEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
      administrators
      registeredUsers {
        items {
            userId
            user {
              avatar
            }
        }
      }
      invitedUsers
      teams {
        items {
          team {
            id
            name
            avatar
            users {
              items {
                userId
                user {
                  avatar
                }
              }
            }
          }
        }
      }
      games {
        name
        bracketType
        scoringMethod
        eliminationType
        rules
        bracket {
          id
          status
        }
      }
    }
  }`

  export const onUpdateWGCEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
            user {
              avatar
            }
        }
      }
      invitedUsers
      administrators
      teams {
        items {
          team {
            id
            name
            avatar
            users {
              items {
                userId
                user {
                  avatar
                }
              }
            }
          }
        }
      }
      games {
        name
        bracketType
        scoringMethod
        eliminationType
        rules
        bracket {
          id
          status
        }
      }
    }
  }
`;