import { gql } from "@apollo/client";

export const QUERY_CLIENTES = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        phone
        website
        address {
          street
          zipcode
        }
        posts {
          data {
            id
            title
          }
        }
      }
    }
  }
`;
