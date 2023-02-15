import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginButtonsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginbuttonscontainer}>
      <View style={styles.joinbuttonscontainer}>
        <Pressable style={[styles.joinstudent, styles.joinstudentFlexBox]}>
          <Text style={[styles.joinAsStudent, styles.logInTypo]}>
            Join as Student
          </Text>
        </Pressable>
        <Pressable
          style={[styles.joinstudent, styles.ml10, styles.joinstudentFlexBox]}
        >
          <Text style={[styles.joinAsStudent, styles.logInTypo]}>
            Join as Mentor
          </Text>
        </Pressable>
      </View>
      <TouchableOpacity
        style={[styles.loginbutton, styles.mt16, styles.joinstudentFlexBox]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomeDashboard" })
        }
      >
        <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt16: {
    marginTop: 16,
  },
  joinstudentFlexBox: {
    justifyContent: "center",
    borderRadius: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  logInTypo: {
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 24,
    fontSize: 14,
  },
  joinAsStudent: {
    color: "#fff",
  },
  joinstudent: {
    flex: 1,
    backgroundColor: "#d94645",
    height: 56,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  joinbuttonscontainer: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  logIn: {
    color: "#d94645",
  },
  loginbutton: {
    borderStyle: "solid",
    borderColor: "#d94645",
    borderWidth: 2,
    padding: 16,
    alignSelf: "stretch",
  },
  loginbuttonscontainer: {
    alignSelf: "stretch",
  },
});

export default LoginButtonsContainer;
