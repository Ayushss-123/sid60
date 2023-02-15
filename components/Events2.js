import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Events2 = ({ style }) => {
  return (
    <View style={[styles.events, style]}>
      <Image
        style={styles.calendarIcon}
        resizeMode="cover"
        source={require("../assets/calendar.png")}
      />
      <Text style={[styles.events1, styles.mt8]}>Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  calendarIcon: {
    width: 32,
    height: 32,
  },
  events1: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
    fontFamily: "Poppins_regular",
    color: "#222224",
    textAlign: "center",
    width: 55,
  },
  events: {
    alignItems: "center",
  },
});

export default Events2;
