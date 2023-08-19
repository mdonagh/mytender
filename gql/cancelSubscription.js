import { gql, mutation } from '@apollo/client';

export const CANCEL_SUBSCRIPTION = gql`
mutation cancelSubscription($reason: String!) {
  cancelSubscription(reason: $reason) {
        user {
          id
        }
      }
    }
`;
