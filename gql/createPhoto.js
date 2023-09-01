import { gql } from '@apollo/client';

export const CREATE_PHOTO = gql`
  mutation createPhoto($kind: Kind!, $bytes: Int!) {
    createPhoto(kind: $kind, bytes: $bytes) {
      url
    }
  }
`;
