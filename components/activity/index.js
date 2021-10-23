import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Activity({ color, activity, data }) {
  const [showTimer, setShowTimer] = React.useState(false);
  const [timer, setTimer] = React.useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    timer: 0,
    id: null,
  });
  const [ID, setID] = React.useState(null);

  function add() {
    if (timer.seconds === 60) {
      setTimer({ ...timer, seconds: 0, minutes: timer.minutes++ });
    } else if (timer.minutes === 60) {
      setTimer({ ...timer, minutes: 0, hours: timer.hours++ });
    } else {
      setTimer({ ...timer, seconds: timer.seconds++ });
    }
  }

  function startTimer() {
    const intervalID = setInterval(add, 1000);
    setID(intervalID);
  }
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
      {showTimer && (
        <View style={{ color: "#fff" }}>
          <Text
            style={{ color: "#fff", textAlign: "center", padding: 6 }}
          >{`${timer.hours} : ${timer.minutes} : ${timer.seconds}`}</Text>
          <Button onPress={startTimer} title="Start" />
          <Button
            onPress={() => {
              clearInterval(ID);
              console.log("here", ID);
            }}
            title="Stop"
          />
          <Button onPress={() => console.log("a")} title="Save" />
        </View>
      )}
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
