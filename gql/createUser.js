import { gql, useMutation } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($email: String!,
                     $password: String!,
                     $kind: String!,
                     $description: String) {
createUser(email: $email,
            password: $password,
            kind: $kind,
            description: $description) {
    user {
      id
      kind
    }
    token
  }
}
`;

