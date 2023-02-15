import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const UserProfile = () => {
  return (
    <View style={styles.userprofile}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <View style={[styles.logOut, styles.mt24]}>
          <View style={styles.action}>
            <View style={styles.iconText}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.text, styles.ml8]}>Log out</Text>
            </View>
            <Image
              style={[styles.iconRight, styles.ml195, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-right.png")}
            />
          </View>
          <View style={[styles.divider, styles.mt14]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml195: {
    marginLeft: 195,
  },
  mt14: {
    marginTop: 14,
  },
  mt24: {
    marginTop: 24,
  },
  mt8: {
    marginTop: 8,
  },
  mt626: {
    marginTop: 626,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    textAlign: "center",
    color: "#222224",
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_regular",
    textAlign: "left",
    color: "#222224",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconRight: {
    overflow: "hidden",
  },
  action: {
    flexDirection: "row",
  },
  divider: {
    borderStyle: "solid",
    borderColor: "#ffebeb",
    borderTopWidth: 1,
    width: 343,
    height: 1,
  },
  logOut: {
    paddingTop: 16,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  userprofile: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    paddingTop: 35,
    alignItems: "center",
  },
});

export default UserProfile;
