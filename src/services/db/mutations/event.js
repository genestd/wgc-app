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
      registeredUsers {
        items {
          id
          eventId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      invitedUsers
      teams {
        items {
          id
          eventId
          teamId
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
    }
  }`