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
      invitedUsers {
        id
        screenName
        email
        bio
        avatar
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
      invitedUsers {
        id
        screenName
        email
        bio
        avatar
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
      invitedUsers {
        id
        screenName
        email
        bio
        avatar
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
        invitedUsers {
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
      user {
        id
        screenName
        email
        bio
        avatar
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
        invitedUsers {
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
      user {
        id
        screenName
        email
        bio
        avatar
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
        invitedUsers {
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
      user {
        id
        screenName
        email
        bio
        avatar
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
