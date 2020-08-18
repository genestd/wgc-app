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
      mainImage
      registrationType
      registeredUsers {
        id
        screenName
        email
        bio
        avatar
        createdAt
        updatedAt
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
      mainImage
      registrationType
      registeredUsers {
        id
        screenName
        email
        bio
        avatar
        createdAt
        updatedAt
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
      mainImage
      registrationType
      registeredUsers {
        id
        screenName
        email
        bio
        avatar
        createdAt
        updatedAt
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
  }
`;
