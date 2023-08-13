import { gql, useQuery } from '@apollo/client';

export const CURRENT_PHOTOS = gql`
query {
    user {
      id
      bannerUrl
      headshotUrl
    }
}
`;
