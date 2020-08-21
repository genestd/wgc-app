export const listWGCEvents = /* GraphQL */ `
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
        invitedUsers {
          id
          screenName
          email
          bio
          avatar
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
