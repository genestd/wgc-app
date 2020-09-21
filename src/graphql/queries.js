/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
      administrators
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
export const listEvents = /* GraphQL */ `
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
          nextToken
        }
        invitedUsers
        administrators
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
      nextToken
    }
  }
`;
export const getEventUsers = /* GraphQL */ `
  query GetEventUsers($eventId: ID!, $userId: ID!) {
    getEventUsers(eventId: $eventId, userId: $userId) {
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
        administrators
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
export const listEventUserss = /* GraphQL */ `
  query ListEventUserss(
    $eventId: ID
    $userId: ModelIDKeyConditionInput
    $filter: ModelEventUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventUserss(
      eventId: $eventId
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          invitedUsers
          administrators
          createdAt
          updatedAt
        }
        user {
          id
          screenName
          email
          bio
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeamUser = /* GraphQL */ `
  query GetTeamUser($id: ID!) {
    getTeamUser(id: $id) {
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
export const listTeamUsers = /* GraphQL */ `
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
          createdAt
          updatedAt
        }
        user {
          id
          screenName
          email
          bio
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventTeam = /* GraphQL */ `
  query GetEventTeam($id: ID!) {
    getEventTeam(id: $id) {
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
        administrators
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
export const listEventTeams = /* GraphQL */ `
  query ListEventTeams(
    $filter: ModelEventTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          invitedUsers
          administrators
          createdAt
          updatedAt
        }
        team {
          id
          name
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
