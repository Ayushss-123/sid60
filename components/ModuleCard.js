import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import ModuleProgressBar from "../components/ModuleProgressBar";
import ModuleStartButton from "../components/ModuleStartButton";

const ModuleCard = ({ moduleName, illustration }) => {
  return (
    <View style={styles.module}>
      <Image
        style={styles.illustrationIcon}
        resizeMode="cover"
        source={illustration}
      />
      <View style={[styles.description, styles.mt8]}>
        <Text style={styles.title}>{moduleName}</Text>
        <Text style={[styles.body, styles.mt8, styles.hClr, styles.hTypo]}>
          <Text style={styles.learnTheBasics}>
            Learn the Basics of Money Management
          </Text>
        </Text>
      </View>
      <View style={[styles.dueTime, styles.mt8]}>
        <View style={styles.accessTimeParent}>
          <Image
            style={styles.accessTimeIcon}
            resizeMode="cover"
            source={require("../assets/access-time.png")}
          />
          <Text style={[styles.hClr, styles.ml4, styles.hTypo]}>3 h</Text>
        </View>
        <View style={styles.dueDateParent}>
          <Text style={[styles.dueDate, styles.textTypo]}>Due Date:</Text>
          <Text style={[styles.textTypo, styles.ml4, styles.hClr]}>03-09</Text>
        </View>
      </View>
      <ModuleProgressBar />
      <ModuleStartButton />
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
  hClr: {
    color: "#a5a5a5",
    fontFamily: "Poppins_regular",
    lineHeight: 18,
  },
  hTypo: {
    fontSize: 13,
    fontFamily: "Poppins_regular",
    lineHeight: 18,
    textAlign: "left",
  },
  textTypo: {
    textAlign: "center",
    fontSize: 13,
  },
  illustrationIcon: {
    width: 141,
    height: 148,
    overflow: "hidden",
  },
  title: {
    fontSize: 14,
    color: "#222224",
    textAlign: "left",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 16,
    alignSelf: "stretch",
  },
  learnTheBasics: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  body: {
    alignSelf: "stretch",
  },
  description: {
    alignSelf: "stretch",
  },
  accessTimeIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  accessTimeParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDate: {
    color: "#fb7c23",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
  },
  dueDateParent: {
    flexDirection: "row",
  },
  dueTime: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  module: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(34, 34, 36, 0.2)",
    borderWidth: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default ModuleCard;
