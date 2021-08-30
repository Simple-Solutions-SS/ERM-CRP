import { gql, useQuery } from "@apollo/client";
import {} from "../generated/graphql";

export const QUERY_ASIENTOS = gql`
  query FetchJournalEntries {
    acct_JournalEntry {
      IdJournalEntry
      Account {
        AccountNumber
        Description
      }
      IdReference
      Amount
    }
  }
`;

const useAsientos = () => {
  const response = useQuery(QUERY_ASIENTOS);

  return response;
};

export default useAsientos;
