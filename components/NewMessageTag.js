import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewMessageTag = () => {
  return (
    <View style={[styles.tags, styles.ml2]}>
      <Text style={styles.text}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#bb4141",
    textAlign: "center",
  },
  tags: {
    borderRadius: 40,
    backgroundColor: "#ffebeb",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
  },
});

export default NewMessageTag;
