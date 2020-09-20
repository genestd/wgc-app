/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      screenName
      email
      bio
      avatar
      events {
        items {
          id
          eventId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      screenName
      email
      bio
      avatar
      events {
        items {
          id
          eventId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      screenName
      email
      bio
      avatar
      events {
        items {
          id
          eventId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      teams {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      avatar
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      avatar
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      avatar
      users {
        items {
          id
          userId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
        pointsToWin
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
  }
`;
export const onUpdateEvent = /* GraphQL */ `
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
        pointsToWin
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
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
        pointsToWin
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
  }
`;
export const onCreateEventUsers = /* GraphQL */ `
  subscription OnCreateEventUsers {
    onCreateEventUsers {
      id
      eventId
      userId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventUsers = /* GraphQL */ `
  subscription OnUpdateEventUsers {
    onUpdateEventUsers {
      id
      eventId
      userId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventUsers = /* GraphQL */ `
  subscription OnDeleteEventUsers {
    onDeleteEventUsers {
      id
      eventId
      userId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeamUser = /* GraphQL */ `
  subscription OnCreateTeamUser {
    onCreateTeamUser {
      id
      userId
      teamId
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeamUser = /* GraphQL */ `
  subscription OnUpdateTeamUser {
    onUpdateTeamUser {
      id
      userId
      teamId
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeamUser = /* GraphQL */ `
  subscription OnDeleteTeamUser {
    onDeleteTeamUser {
      id
      userId
      teamId
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        screenName
        email
        bio
        avatar
        events {
          nextToken
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEventTeam = /* GraphQL */ `
  subscription OnCreateEventTeam {
    onCreateEventTeam {
      id
      eventId
      teamId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventTeam = /* GraphQL */ `
  subscription OnUpdateEventTeam {
    onUpdateEventTeam {
      id
      eventId
      teamId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventTeam = /* GraphQL */ `
  subscription OnDeleteEventTeam {
    onDeleteEventTeam {
      id
      eventId
      teamId
      event {
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
          nextToken
        }
        invitedUsers
        teams {
          nextToken
        }
        games {
          name
          bracketType
          scoringMethod
          pointsToWin
          eliminationType
          rules
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        avatar
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
