import { gql, useQuery } from '@apollo/client';

export const RIDESHARE = gql`
  query rideshare($lat: Float!, $lng: Float!, $shiftId: ID!) {
    rideshare(lat: $lat, lng: $lng, shiftId: $shiftId) {
      uber
      lyft
    }
  }
`;
