import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Activity from "./components/activity";

import { useNavigation } from "@react-navigation/core";

import Profile from "./components/profile";
import Login from "./components/login";

export default function Home() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Testing Firebase!!!</Text>
        <Login />
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
