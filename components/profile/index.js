import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Profile() {
  return (
    <View class="wrapper" style={styles.container}>
      <Image
        source={require("/Users/rafael/Projects/mobile/task-manager/rafa.jpeg")}
        style={styles.image}
      />
      <View>
        <Text>Report for</Text>
        <Text>Jeremy Robson</Text>

        <Text>Daily</Text>
        <Text class="active">Weekly</Text>
        <Text>Monthly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 25,
  },
});
