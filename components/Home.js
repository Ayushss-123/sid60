import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = ({ style }) => {
  return (
    <View style={[styles.home, style]}>
      <Image
        style={styles.house01Icon}
        resizeMode="cover"
        source={require("../assets/house-01.png")}
      />
      <Text style={[styles.home1, styles.mt8]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  house01Icon: {
    width: 32,
    height: 32,
  },
  home1: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
    fontFamily: "Poppins_regular",
    color: "#222224",
    textAlign: "center",
    width: 55,
  },
  home: {
    alignItems: "center",
  },
});

export default Home;
