import { gql } from '@apollo/client';

export const CREATE_SHIFT = gql`
  mutation EnterShift(
    $notes: String!
    $address: String!
    $barName: String!
    $recurring: Boolean!
    $duration: Int!
    $startTime: ISO8601DateTime!
    $latitude: Float!
    $longitude: Float!
  ) {
    createShift(
      notes: $notes
      barName: $barName
      address: $address
      recurring: $recurring
      duration: $duration
      startTime: $startTime
      latitude: $latitude
      longitude: $longitude
    ) {
      shift {
        id
        notes
        address
        startTime
        latitude
        longitude
      }
    }
  }
`;
