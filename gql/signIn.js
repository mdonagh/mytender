import { gql, useMutation } from '@apollo/client';

export const SIGN_IN = gql`
mutation SignIn($email: String!, $password: String!) {
  signInUser(email: $email, password: $password) {
    user {
      id
      email
      kind
    }
    token
  }
}
`;