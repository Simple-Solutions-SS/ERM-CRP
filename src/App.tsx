import React from "react";
import "./App.css";
import { Rutas } from "./rutas/Rutas";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Rutas />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
