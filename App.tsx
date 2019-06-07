import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NotesDashboard from "./src/components/NotesDashboard";
import client from "./src/client";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

export default function App() {
  return (
    <ApolloHooksProvider client={client}>
      <View style={styles.container}>
        <NotesDashboard />
      </View>
    </ApolloHooksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
