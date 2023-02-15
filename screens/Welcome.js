import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import LoginButtonsContainer from "../components/LoginButtonsContainer";

const Welcome = () => {
  return (
    <View style={[styles.welcome, styles.welcomeFlexBox]}>
      <View style={[styles.welcomecontainer, styles.welcomeFlexBox]}>
        <View style={styles.welcomeinfo}>
          <Image
            style={styles.illustrationIcon}
            resizeMode="cover"
            source={require("../assets/illustration.png")}
          />
          <Text style={[styles.title, styles.mt16]}>
            <Text style={styles.welcomeTo}>Welcome to</Text>
            <Text style={styles.myRedEd}>MY RED ED</Text>
          </Text>
        </View>
        <LoginButtonsContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  welcomeFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  illustrationIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 329,
    alignSelf: "stretch",
    width: "100%",
  },
  welcomeTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  myRedEd: {
    margin: 0,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: "Montserrat_bold",
    color: "#d94645",
    textAlign: "center",
    alignSelf: "stretch",
  },
  welcomeinfo: {
    width: 329,
    alignItems: "center",
  },
  welcomecontainer: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  welcome: {
    backgroundColor: "#fff",
    height: 844,
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default Welcome;
