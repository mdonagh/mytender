import { gql, useMutation } from '@apollo/client';

export const NEARBY_SHIFTS = gql`
mutation NearbyShifts($latitude: Float!,
                     $longitude: Float!) {
createShift(latitude: $latitude,
            longitude: $longitude,
            recurring: $recurring) {
    shifts {
      nodes {
        id
        latitude
        longitude
      }
    }
  }
}
`;