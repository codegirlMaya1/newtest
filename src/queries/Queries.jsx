import { gql } from '@apollo/client';

export const GET_LOCATION = gql`
  query GetLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        location {
          name
        }
      }
    }
  }
`;
