import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";

const Wrapper = ({ style }) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <View style={styles.view}>
        <Text style={styles.title}>Chat</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#222224",
    textAlign: "center",
  },
  view: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#ffebeb",
    borderBottomWidth: 2,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Wrapper;
