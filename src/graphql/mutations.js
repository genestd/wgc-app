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
