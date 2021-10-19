import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SvgUri } from "react-native-svg";

export default function Activity({ color, activity, data }) {
  return (
    <View style={{ backgroundColor: color, borderRadius: 25, marginTop: 20 }}>
      <SvgUri width="100%" height="100%" uri={image} />
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#fff" }}>{activity}</Text>
          <Text style={{ color: "#fff" }}>32 hrs</Text>
        </View>
        <View>
          <Text style={{ color: "#fff" }}>...</Text>
          <Text style={{ color: "#fff" }}>Last Week - 10 hrs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsl(235, 46%, 20%)",
    height: 100,
    width: "80%",
    marginTop: 20,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
