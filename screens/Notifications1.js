import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
} from "react-native";
import NotificationView from "../components/NotificationView";
import MonthlyNotificationContainer from "../components/MonthlyNotificationContainer";

const Notifications1 = () => {
  return (
    <View style={styles.notifications}>
      <NotificationView />
      <MonthlyNotificationContainer />
      <Pressable style={styles.buttonPrimary}>
        <Text style={styles.viewMore}>View more</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml57: {
    marginLeft: 57,
  },
  notificationsheader: {
    backgroundColor: "#fff",
  },
  viewMore: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#d94645",
    textAlign: "center",
  },
  buttonPrimary: {
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: "#d94645",
    borderWidth: 2,
    flexDirection: "row",
    paddingHorizontal: 55,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notifications: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    paddingBottom: 24,
    alignItems: "center",
  },
});

export default Notifications1;
