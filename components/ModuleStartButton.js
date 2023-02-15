import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const ModuleStartButton = () => {
  return (
    <View style={[styles.buttonPrimary, styles.mt8, styles.startFlexBox]}>
      <Text style={[styles.start, styles.startFlexBox]}>Start</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  startFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    width: 252,
  },
  buttonPrimary: {
    alignSelf: "stretch",
    borderRadius: 40,
    backgroundColor: "#d94645",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
});

export default ModuleStartButton;
