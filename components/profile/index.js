import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Profile() {
  return (
    <>
      <View class="wrapper" style={{ ...padding(20), ...styles.container }}>
        <Image
          source={require("/Users/rafael/Projects/mobile/task-manager/rafa.jpeg")}
          style={styles.image}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.text}>
            <Text>Report for </Text>
            {"\n"}
            <Text style={{ fontSize: 24 }}>Rafael Viana</Text>
          </Text>
        </View>
      </View>
      <View style={{ ...padding(20), ...styles.subcontainer }}>
        <Text style={styles.text}>
          <Text>Daily</Text>
          <Text class="active">Weekly</Text>
          <Text>Monthly</Text>
        </Text>
      </View>
    </>
  );
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: "hsl(246, 80%, 60%)",
    width: "87%",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 25,
  },
  text: {
    color: "#fff",
    opacity: 0.7,
  },
  subcontainer: {
    backgroundColor: "hsl(235, 46%, 20%)",
    width: "87%",
  },
});
