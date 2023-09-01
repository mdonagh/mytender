import { gql } from '@apollo/client';

export const GET_SHIFT = gql`
  query shift($id: ID!) {
    shift(id: $id) {
      notes
      barName
      address
      startTime
      user {
        description
        venmo
        cashapp
        instagram
      }
    }
  }
`;
