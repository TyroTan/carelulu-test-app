import React from "react";
import client from "./src/client";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ApolloHooksProvider client={client}>
      <AppNavigator />
    </ApolloHooksProvider>
  );
}
