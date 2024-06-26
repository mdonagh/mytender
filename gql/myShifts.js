import { gql } from '@apollo/client';

export const MY_SHIFTS = gql`
  query shifts($personal: Boolean) {
    shifts(personal: $personal) {
      nodes {
        id
        notes
        barName
        address
        startTime
      }
    }
  }
`;
