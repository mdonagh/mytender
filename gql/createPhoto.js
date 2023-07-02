import { gql, useMutation } from '@apollo/client';

export const CREATE_PHOTO = gql`
mutation createPhoto($filename: String!,
                     $byteSize: Int!,
                     $checksum: String!,
                     $contentType: String!) {
createPhoto(filename: $filename,
            byteSize: $byteSize,
            checksum: $checksum,
            contentType: $contentType) {
    presigned {
      url
      headers
      signedId
    }
  }
}
`;