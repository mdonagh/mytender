import { gql, useQuery } from '@apollo/client';

export const CREATE_SHIFT = gql`
query EnterShift($notes: String!,
                     $address: String!,
                     $recurring: Boolean!,
                     $duration: Int!,
                     $startTime: ISO8601DateTime!,
                     $latitude: Float!,
                     $longitude: Float!) {
createShift(notes: $notes,
            address: $address,
            recurring: $recurring,
            duration: $duration,
            startTime: $startTime,
            latitude: $latitude,
            longitude: $longitude) {
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