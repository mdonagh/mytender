import { gql, useQuery } from '@apollo/client';

export const LIST_SHIFTS = gql`
query NearbyShifts($latitude: Float!,
                     $longitude: Float!,
                     $radius: Integer!) {
nearbyShifts(latitude: $latitude,
            longitude: $longitude,
            $radius: 75) {
      nodes {
        id
        latitude
        longitude
        user {
          headshotUrl
        }
      }
    }
}
`;