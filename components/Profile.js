import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Profile = ({ style }) => {
  return (
    <View style={[styles.profile, style]}>
      <Image
        style={styles.usercircleIcon}
        resizeMode="cover"
        source={require("../assets/usercircle.png")}
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
    fontFamily: "Poppins_regular",
    color: "#222224",
    textAlign: "center",
    width: 55,
  },
  profile: {
    alignItems: "center",
  },
});

export default Profile;
