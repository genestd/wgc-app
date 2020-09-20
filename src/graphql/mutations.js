/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createEventUsers = /* GraphQL */ `
  mutation CreateEventUsers(
    $input: CreateEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    createEventUsers(input: $input, condition: $condition) {
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
export const updateEventUsers = /* GraphQL */ `
  mutation UpdateEventUsers(
    $input: UpdateEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    updateEventUsers(input: $input, condition: $condition) {
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
export const deleteEventUsers = /* GraphQL */ `
  mutation DeleteEventUsers(
    $input: DeleteEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    deleteEventUsers(input: $input, condition: $condition) {
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
export const createTeamUser = /* GraphQL */ `
  mutation CreateTeamUser(
    $input: CreateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    createTeamUser(input: $input, condition: $condition) {
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
export const updateTeamUser = /* GraphQL */ `
  mutation UpdateTeamUser(
    $input: UpdateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    updateTeamUser(input: $input, condition: $condition) {
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
export const deleteTeamUser = /* GraphQL */ `
  mutation DeleteTeamUser(
    $input: DeleteTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    deleteTeamUser(input: $input, condition: $condition) {
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
export const createEventTeam = /* GraphQL */ `
  mutation CreateEventTeam(
    $input: CreateEventTeamInput!
    $condition: ModelEventTeamConditionInput
  ) {
    createEventTeam(input: $input, condition: $condition) {
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
export const updateEventTeam = /* GraphQL */ `
  mutation UpdateEventTeam(
    $input: UpdateEventTeamInput!
    $condition: ModelEventTeamConditionInput
  ) {
    updateEventTeam(input: $input, condition: $condition) {
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
export const deleteEventTeam = /* GraphQL */ `
  mutation DeleteEventTeam(
    $input: DeleteEventTeamInput!
    $condition: ModelEventTeamConditionInput
  ) {
    deleteEventTeam(input: $input, condition: $condition) {
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
