import { gql, useQuery } from '@apollo/client';

export const MY_SHIFTS = gql`
query Shifts(personal: true) {
      nodes {
        id
        notes
        address
        startTime
      }
    }
`;