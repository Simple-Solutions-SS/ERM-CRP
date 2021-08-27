import React from "react";
import "./App.css";
import { Rutas } from "./rutas/Rutas";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { ModalProvider } from "./contextos/modal-context";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://selca.hasura.app/v1/graphql",
    headers: {
      Authorization:
        "Bearer " +
        "HbMhTp3QKx1bjzWkINqEzftBAWNHsWfvY2UqhYCPpk53ba0pN9WcngleB1wiawz1",
      "x-hasura-admin-secret":
        "HbMhTp3QKx1bjzWkINqEzftBAWNHsWfvY2UqhYCPpk53ba0pN9WcngleB1wiawz1",
      "content-type": "application/json",
    },
  }),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <ApolloProvider client={client}>
          <Rutas />
        </ApolloProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
