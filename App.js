import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Activity from "./components/activity";
import Profile from "./components/profile";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile />
        <Activity activity="Work" color="hsl(15, 100%, 70%)" />
        <Activity activity="Study" color="hsl(195, 74%, 62%)" />
        <Activity activity="Exercise" color="hsl(348, 100%, 68%)" />
        <Activity activity="Personal Projects" color="hsl(145, 58%, 55%)" />
        <Activity activity="Family" color="hsl(264, 64%, 52%)" />
        <Activity activity="Play" color="hsl(43, 84%, 65%)" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  text: {
    color: "#fff",
  },
});
