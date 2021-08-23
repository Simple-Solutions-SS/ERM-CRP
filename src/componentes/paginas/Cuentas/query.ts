import { gql } from "@apollo/client";

export const QUERY_CUENTAS = gql`
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
