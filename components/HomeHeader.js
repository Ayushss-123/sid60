import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, styles.headerFlexBox]}>
      <View style={styles.headerFlexBox}>
        <Image
          style={styles.photoIcon}
          resizeMode="cover"
          source={require("../assets/photo.png")}
        />
        <View style={styles.ml5}>
          <Text style={styles.fullName}>Darlene Robertson</Text>
          <View style={[styles.studentParent, styles.mt8]}>
            <Text style={[styles.student, styles.classTypo]}>Student</Text>
            <Text style={[styles.student, styles.ml8, styles.classTypo]}>
              •
            </Text>
            <Text style={[styles.class, styles.ml8, styles.classTypo]}>
              Class 2022
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.notificationtrue}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/notificationtrue.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt8: {
    marginTop: 8,
  },
  ml5: {
    marginLeft: 5,
  },
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  classTypo: {
    color: "#d94645",
    textAlign: "left",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 16,
  },
  photoIcon: {
    borderRadius: 50,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  fullName: {
    color: "#1a1a22",
    textAlign: "left",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 16,
    fontSize: 14,
  },
  student: {
    fontSize: 13,
  },
  class: {
    fontSize: 14,
    color: "#d94645",
  },
  studentParent: {
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  notificationtrue: {
    width: 32,
    height: 32,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: "#fff5f5",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
});

export default HomeHeader;
