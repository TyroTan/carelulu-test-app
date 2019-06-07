import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NotesDashboard from "./src/components/NotesDashboard";

type listItem = {
  name: String,
  age: number
}

const list: Array<listItem> = [{ name: "wordl", age: 4 }, , { name: "wordl2", age: 5 }];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your appss!</Text>
      <NotesDashboard list={list} />
    </View>
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
