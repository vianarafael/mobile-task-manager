import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Profile() {
  const [details, setDetails] = React.useState({
    display: false,
    timePeriod: null,
  });
  return (
    <View
      style={{
        backgroundColor: "hsl(235, 46%, 20%)",
        borderRadius: 25,
      }}
    >
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
          <Text
            onPress={() =>
              setDetails({ timePeriod: "daily", display: !details.display })
            }
          >
            Daily
          </Text>
          {"         "}
          <Text
            onPress={() =>
              setDetails({ timePeriod: "weekly", display: !details.display })
            }
          >
            Weekly
          </Text>
          {"         "}
          <Text
            onPress={() =>
              setDetails({ timePeriod: "montly", display: !details.display })
            }
          >
            Monthly
          </Text>
        </Text>
      </View>
      {details.display && (
        <View>
          <Text style={{ color: "#fff" }}>I am here {details.timePeriod}</Text>
        </View>
      )}
    </View>
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
    borderRadius: 25,
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
    padding: 4,
  },
  subcontainer: {
    width: "87%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center",
  },
});
