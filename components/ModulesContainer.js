import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";

const ModulesContainer = () => {
  return (
    <View style={[styles.cards, styles.mt8]}>
      <ModuleCard
        moduleName="Finance Fundamentals"
        illustration={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
      />
      <View style={[styles.module, styles.mt16]}>
        <Image
          style={styles.undrawInTheOfficeReJtgcIcon}
          resizeMode="cover"
          source={require("../assets/undraw-in-the-office-re-jtgc.png")}
        />
        <View style={[styles.cards, styles.mt8]}>
          <Text style={[styles.title, styles.titleTypo]}>
            Managing Your “E” Factor! Part 1
          </Text>
          <Text style={[styles.body, styles.mt8, styles.hTypo]}>
            Learn to manage your emotions and improve your relationships and
            life.
          </Text>
        </View>
        <View style={[styles.dueTime, styles.mt8]}>
          <View style={styles.accessTimeParent}>
            <Image
              style={styles.accessTimeIcon}
              resizeMode="cover"
              source={require("../assets/access-time.png")}
            />
            <Text style={[styles.h, styles.ml4, styles.hTypo]}>3 h</Text>
          </View>
          <View style={[styles.dueDateParent, styles.ml140]}>
            <Text style={styles.dueDate}>Due Date:</Text>
            <Text style={[styles.text, styles.ml4, styles.hTypo]}>03-09</Text>
          </View>
        </View>
        <View style={[styles.timeline, styles.mt8, styles.timelineLayout]}>
          <View style={[styles.progress, styles.timelineLayout]} />
        </View>
        <View style={[styles.buttonPrimary, styles.mt8]}>
          <Text style={[styles.start, styles.titleTypo]}>Start</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  ml140: {
    marginLeft: 140,
  },
  mt16: {
    marginTop: 16,
  },
  titleTypo: {
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 14,
  },
  hTypo: {
    color: "#a5a5a5",
    fontFamily: "Poppins_regular",
    lineHeight: 18,
    fontSize: 13,
  },
  timelineLayout: {
    borderRadius: 20,
    alignSelf: "stretch",
  },
  undrawInTheOfficeReJtgcIcon: {
    width: 172,
    height: 148,
    overflow: "hidden",
  },
  title: {
    color: "#222224",
    textAlign: "left",
    lineHeight: 16,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 14,
    alignSelf: "stretch",
  },
  body: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  cards: {
    alignSelf: "stretch",
  },
  accessTimeIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  h: {
    textAlign: "left",
  },
  accessTimeParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDate: {
    color: "#fb7c23",
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 16,
  },
  text: {
    textAlign: "center",
  },
  dueDateParent: {
    flexDirection: "row",
  },
  dueTime: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  progress: {
    backgroundColor: "#bb4141",
    height: 4,
    overflow: "hidden",
  },
  timeline: {
    backgroundColor: "#ffebeb",
    paddingRight: 220,
  },
  start: {
    lineHeight: 22,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    width: 252,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 14,
    alignItems: "center",
  },
  buttonPrimary: {
    borderRadius: 40,
    backgroundColor: "#d94645",
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  module: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(34, 34, 36, 0.2)",
    borderWidth: 1,
    padding: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default ModulesContainer;
