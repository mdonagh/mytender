import { gql, useMutation } from '@apollo/client';

export const DELETE_SHIFT = gql`
mutation deleteShift($id: ID!) {
  deleteShift(id: $id){
      deleted
    }
  }
`;