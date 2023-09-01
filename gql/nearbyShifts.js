import { gql } from '@apollo/client';

export const NEARBY_SHIFTS = gql`
  query NearbyShifts($latitude: Float!, $longitude: Float!) {
    nearbyShifts(latitude: $latitude, longitude: $longitude) {
      nodes {
        id
        latitude
        longitude
        user {
          bannerUrl
          headshotUrl
        }
      }
    }
  }
`;
