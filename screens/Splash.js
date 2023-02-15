import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    width: 166,
    height: 64,
  },
  splash: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    paddingHorizontal: 112,
    paddingVertical: 390,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
