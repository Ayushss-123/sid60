import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile1 = ({ style }) => {
  return (
    <View style={[styles.profile, style]}>
      <Image
        style={styles.usercircleIcon}
        resizeMode="cover"
        source={require("../assets/usercircle1.png")}
      />
      <Text style={[styles.profile1, styles.mt8]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  usercircleIcon: {
    width: 32,
    height: 32,
  },
  profile1: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#d94645",
    textAlign: "center",
    width: 55,
  },
  profile: {
    alignItems: "center",
  },
});

export default Profile1;
