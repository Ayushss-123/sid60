import * as React from "react";
import { StyleSheet, View } from "react-native";

const ModuleProgressBar = () => {
  return (
    <View style={[styles.timeline, styles.mt8, styles.timelineLayout]}>
      <View style={[styles.progress, styles.timelineLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  timelineLayout: {
    borderRadius: 20,
    alignSelf: "stretch",
  },
  progress: {
    backgroundColor: "#bb4141",
    overflow: "hidden",
  },
  timeline: {
    backgroundColor: "#ffebeb",
    paddingRight: 220,
  },
});

export default ModuleProgressBar;
