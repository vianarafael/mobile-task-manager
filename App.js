import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Activity from "./components/activity";
import Profile from "./components/profile";

import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  // firebaseから発行される
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Profile />
        <Activity activity="Work" color="hsl(15, 100%, 70%)" />
        <Activity activity="Study" color="hsl(195, 74%, 62%)" />
        <Activity activity="Personal Projects" color="hsl(145, 58%, 55%)" />
        <Activity activity="Exercise" color="hsl(348, 100%, 68%)" />
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
