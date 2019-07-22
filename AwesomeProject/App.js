import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalExample from "./Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Wow this is great!</Text>
      <ModalExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc0362",
    alignItems: "center",
    justifyContent: "center"
  },
  white: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 100,
    margin: 10,
    textAlign: "center"
  }
});
