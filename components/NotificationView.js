import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NotificationView = () => {
  return (
    <View style={[styles.newNotificationFlexBox, styles.mt24]}>
      <View style={[styles.newcontainer, styles.chatStackFlexBox]}>
        <Text style={styles.new}>New</Text>
      </View>
      <View
        style={[
          styles.newnotification,
          styles.mt24,
          styles.newNotificationFlexBox,
        ]}
      >
        <View style={styles.chatStackFlexBox}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={[styles.dataContainer, styles.ml12]}>
            <Text style={styles.jessica}>Jessica</Text>
            <Text
              style={[
                styles.hiStudentsHope,
                styles.mt4,
                styles.today1223AmTypo,
              ]}
            >
              Hi students! Hope you’re well. Don’t forget to bring your laptops!
            </Text>
            <Text
              style={[styles.today1223Am, styles.mt4, styles.today1223AmTypo]}
            >
              Today, 12:23 AM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  ml12: {
    marginLeft: 12,
  },
  mt24: {
    marginTop: 24,
  },
  chatStackFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  newNotificationFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  today1223AmTypo: {
    fontFamily: "Poppins_regular",
    textAlign: "left",
    alignSelf: "stretch",
  },
  new: {
    textAlign: "center",
    color: "#222224",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 26,
    fontSize: 16,
  },
  newcontainer: {
    padding: 10,
  },
  avatarIcon: {
    borderRadius: 100,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  jessica: {
    textAlign: "left",
    color: "#222224",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 26,
    fontSize: 16,
    alignSelf: "stretch",
  },
  hiStudentsHope: {
    fontSize: 14,
    lineHeight: 22,
    color: "#222224",
  },
  today1223Am: {
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(34, 34, 36, 0.3)",
  },
  dataContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  newnotification: {
    backgroundColor: "#ffebeb",
    paddingHorizontal: 24,
    paddingVertical: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default NotificationView;
