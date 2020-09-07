export const createWGCEventTeam = /* GraphQL */ `
  mutation CreateEventTeam(
    $input: CreateEventTeamInput!
    $condition: ModelEventTeamConditionInput
  ) {
    createEventTeam(input: $input, condition: $condition) {
      eventId
      team {
        id
        name
        avatar
        users {
          items {
              userId
          }
        }
      }
    }
  }
`;

export const onCreateWGCEventTeam = /* GraphQL */ `
  subscription OnCreateEventTeam {
    onCreateEventTeam {
        eventId
        team {
          id
          name
          avatar
          users {
            items {
                userId
            }
          }
        }
      }
  }
`