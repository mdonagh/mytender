import { gql, useMutation } from '@apollo/client';

export const CREATE_PHOTO = gql`
mutation createPhoto($kind: String!, $bytes: Int!) {
createPhoto(kind: $kind, bytes: $bytes) {
    presigned {
      url
    }
  }
}
`;