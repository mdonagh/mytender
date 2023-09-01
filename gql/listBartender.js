import { gql, useQuery } from '@apollo/client';

export const LIST_BARTENDER = gql`
  query NearbyShifts($latitude: Float!, $longitude: Float!) {
    nearbyShifts(latitude: $latitude, longitude: $longitude, radius: 75) {
      nodes {
        id
        notes
        distance
        barName
        user {
          headshotUrl
          bannerUrl
        }
      }
    }
  }
`;
