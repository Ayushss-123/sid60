import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotificationView from "../components/NotificationView";
import MonthlyNotificationContainer from "../components/MonthlyNotificationContainer";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <View style={[styles.notificationsheader, styles.buttonPrimaryFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Notifications</Text>
        <Pressable
          style={[styles.close, styles.ml57]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/close1.png")}
          />
        </Pressable>
      </View>
      <NotificationView />
      <MonthlyNotificationContainer />
      <Pressable
        style={[styles.buttonPrimary, styles.mt24, styles.buttonPrimaryFlexBox]}
      >
        <Text style={[styles.viewMore, styles.titleTypo]}>View more</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml57: {
    marginLeft: 57,
  },
  mt24: {
    marginTop: 24,
  },
  buttonPrimaryFlexBox: {
    flexDirection: "row",
    borderStyle: "solid",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    color: "#181127",
    zIndex: 0,
    flex: 1,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  close: {
    position: "absolute",
    left: "6.15%",
    top: "30.77%",
    right: "87.69%",
    bottom: "38.46%",
    width: "6.15%",
    height: "30.77%",
    zIndex: 1,
  },
  notificationsheader: {
    alignSelf: "stretch",
    borderColor: "#ffebeb",
    borderBottomWidth: 2,
    height: 77,
    padding: 24,
    backgroundColor: "#fff",
  },
  viewMore: {
    fontSize: 14,
    lineHeight: 22,
    color: "#d94645",
  },
  buttonPrimary: {
    borderRadius: 40,
    borderColor: "#d94645",
    borderWidth: 2,
    paddingHorizontal: 55,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notifications: {
    paddingBottom: 24,
    opacity: 0.3,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Notifications;
