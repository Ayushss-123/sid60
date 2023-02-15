import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NotificationsHeader = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.notificationsheader, style]}>
      <View style={styles.view}>
        <Text style={styles.title}>Notifications</Text>
        <Pressable
          style={[styles.close, styles.ml57]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml57: {
    marginLeft: 57,
  },
  notificationsheader: {
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#181127",
    textAlign: "center",
    zIndex: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  view: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#ffebeb",
    borderBottomWidth: 2,
    height: 77,
    flexDirection: "row",
    padding: 24,
  },
});

export default NotificationsHeader;
