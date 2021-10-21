import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Activity from "./components/activity";
import Profile from "./components/profile";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGR0DZVdwD2V-YFEc59UGi7zW7l41uOpg",
  authDomain: "task-manager-e867b.firebaseapp.com",
  projectId: "task-manager-e867b",
  storageBucket: "task-manager-e867b.appspot.com",
  messagingSenderId: "165006107797",
  appId: "1:165006107797:web:56851f7f0a0782d152279c",
  measurementId: "G-ME3QPCLP7H",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  // var provider = new firebase.auth.GoogleAuthProvider();

  async function onLogin() {
    console.log("click");

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential =
      firebase.auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Testing Firebase!!!</Text>
        <Button onPress={onLogin} title="Click Me" />
        {/* <Profile />
        <Activity activity="Work" color="hsl(15, 100%, 70%)" />
        <Activity activity="Study" color="hsl(195, 74%, 62%)" />
        <Activity activity="Personal Projects" color="hsl(145, 58%, 55%)" />
        <Activity activity="Exercise" color="hsl(348, 100%, 68%)" /> */}
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
