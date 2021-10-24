import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

export default function Activity({ color, activity, data }) {
  const [showTimer, setShowTimer] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [ID, setID] = React.useState(null);

  function add() {
    setTimer((timer) => timer + 1);
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
          <Button
            color="hsl(235, 46%, 20%)"
            onPress={() => {
              setShowTimer(!showTimer);
            }}
            title="..."
          />
          <Text style={{ color: "#fff" }}>Last Week - 10 hrs</Text>
        </View>
      </View>
      {showTimer && (
        <View style={{ color: "#fff" }}>
          <Text style={{ color: "#fff", textAlign: "center", padding: 6 }}>
            {String(timer).toHHMMSS()}
          </Text>
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
