import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Activity from "./components/activity";
import Profile from "./components/profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
      <Activity activity="Work" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
