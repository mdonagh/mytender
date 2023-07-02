import { gql, useMutation } from '@apollo/client';

export const CREATE_SHIFT = gql`
mutation EnterShift($filename: String!,
                     $byteSize: Int!,
                     $checksum: String!,
                     $contentType: String!) {
createShift(filename: $filename,
            byteSize: $byteSize,
            checksum: $checksum,
            contentType: $contentType) {
    presigned {
      url
      headers
      signed_id
    }
  }
}
`;