import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Activity({ color, image, activity, data }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>
        <Text>{activity}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(235, 46%, 20%)",
    height: 100,
    width: "87%",
    marginTop: 20,
    borderRadius: 25,
  },
});
