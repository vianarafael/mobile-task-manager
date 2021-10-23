import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Activity({ color, activity, data }) {
  const [showTimer, setShowTimer] = React.useState(false);
  return (
    <View style={{ backgroundColor: color, borderRadius: 25, marginTop: 20 }}>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#fff" }}>{activity}</Text>
          <Text style={{ color: "#fff" }}>32 hrs</Text>
        </View>
        <View>
          <Text
            style={{ color: "#fff" }}
            onPress={() => {
              setShowTimer(!showTimer);
            }}
          >
            ...
          </Text>
          <Text style={{ color: "#fff" }}>Last Week - 10 hrs</Text>
        </View>
      </View>
      {showTimer && <Text style={{ color: "#fff" }}>Show Me</Text>}
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
