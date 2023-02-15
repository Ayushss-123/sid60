import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const JoinClassModal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.joinclassmodal}>
      <View style={styles.joinClass}>
        <Text style={[styles.title, styles.titleFlexBox]}>Join Class</Text>
        <Text
          style={[
            styles.description,
            styles.mt12,
            styles.joinClass1Typo,
            styles.titleFlexBox,
          ]}
        >
          Ask for the class code to access the modules.
        </Text>
        <TextInput
          style={[styles.input, styles.mt12, styles.inputSpaceBlock]}
          placeholder="Enter Class ID"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
        <TouchableOpacity
          style={[styles.button, styles.mt12]}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "HomeDashboard" })
          }
        >
          <Text style={[styles.joinClass1, styles.joinClass1Typo]}>
            Join Class
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.tabBar, styles.mt48, styles.inputSpaceBlock]}>
        <View style={styles.home}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/navigation--house-01.png")}
          />
          <Text style={[styles.home1, styles.mt8, styles.home1Typo]}>Home</Text>
        </View>
        <View style={[styles.home, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/calendar--calendar.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home1Typo]}>
            Events
          </Text>
        </View>
        <View style={[styles.home, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/user--usercircle.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home1Typo]}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt8: {
    marginTop: 8,
  },
  ml88: {
    marginLeft: 88,
  },
  mt48: {
    marginTop: 48,
  },
  titleFlexBox: {
    height: 47,
    display: "flex",
    color: "#000",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  joinClass1Typo: {
    fontSize: 16,
    textAlign: "center",
  },
  inputSpaceBlock: {
    paddingVertical: 16,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  home1Typo: {
    width: 55,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: 12,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "Montserrat_bold",
    textAlign: "center",
    height: 47,
    display: "flex",
    color: "#000",
  },
  description: {
    lineHeight: 26,
    fontFamily: "Poppins_regular",
    height: 47,
    display: "flex",
    color: "#000",
    fontSize: 16,
  },
  input: {
    borderRadius: 16,
    borderColor: "rgba(0, 0, 0, 0.38)",
    borderWidth: 1,
    alignSelf: "stretch",
    paddingVertical: 16,
    borderStyle: "solid",
  },
  joinClass1: {
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#fff",
  },
  button: {
    borderRadius: 40,
    backgroundColor: "#d94645",
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  joinClass: {
    width: 342,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationHouse01: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  home1: {
    color: "#d94645",
  },
  home: {
    alignItems: "center",
  },
  events1: {
    color: "#222224",
  },
  tabBar: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    display: "none",
    justifyContent: "center",
  },
  joinclassmodal: {
    flex: 1,
    width: "100%",
    paddingVertical: 301,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
});

export default JoinClassModal;
