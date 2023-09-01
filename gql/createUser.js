import { gql, useMutation } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $venmo: String
    $cashapp: String
    $instagram: String
    $kind: String!
    $description: String
  ) {
    createUser(
      email: $email
      password: $password
      kind: $kind
      venmo: $venmo
      cashapp: $cashapp
      instagram: $instagram
      description: $description
    ) {
      user {
        id
        kind
      }
      token
    }
  }
`;
