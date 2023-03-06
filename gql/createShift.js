import { gql, useMutation } from '@apollo/client';

export const CREATE_SHIFT = gql`
mutation EnterShift($notes: String!,
                     $address: String!,
                     $recurring: Boolean!,
                     $duration: Integer!,
                     $startTime: ISO8601DateTime!,
                     $latitude: Float!,
                     $longitude: Float!) {
createShift(input: {notes: $notes,
                    address: $address,
                    recurring: $recurring,
                    duration: $duration,
                    startTime: $startTime,
                    latitude: $latitude,
                    longitude: $longitude}) {
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