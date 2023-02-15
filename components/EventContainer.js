import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const EventContainer = () => {
  return (
    <View style={styles.nextEvent}>
      <Text style={styles.title}>Next event</Text>
      <View style={[styles.nexteventcard, styles.mt8]}>
        <View style={styles.cardcontainer}>
          <View style={styles.description}>
            <View style={styles.day}>
              <Text style={[styles.text, styles.janTypo]}>12</Text>
              <Text style={[styles.jan, styles.mt4, styles.janTypo]}>Jan</Text>
            </View>
            <View style={[styles.name, styles.ml16]}>
              <Text style={[styles.eventName, styles.eventNameLayout]}>
                Event Name
              </Text>
              <Text
                style={[
                  styles.description1,
                  styles.mt8,
                  styles.tinemTypo,
                  styles.eventNameLayout,
                ]}
              >
                Description
              </Text>
            </View>
          </View>
          <Text style={[styles.tinem, styles.tinemTypo]}>18:00-19:30</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  ml16: {
    marginLeft: 16,
  },
  janTypo: {
    textAlign: "center",
    color: "#bb4141",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 26,
    fontSize: 16,
  },
  eventNameLayout: {
    width: 98,
    textAlign: "left",
  },
  tinemTypo: {
    fontFamily: "Poppins_regular",
    lineHeight: 18,
    fontSize: 13,
  },
  title: {
    color: "#222224",
    textAlign: "left",
    lineHeight: 26,
    fontSize: 16,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  text: {
    width: 30,
  },
  jan: {
    width: 50,
  },
  day: {
    borderStyle: "solid",
    borderColor: "#c6c6c6",
    borderRightWidth: 2,
    paddingRight: 16,
    alignItems: "center",
  },
  eventName: {
    fontSize: 14,
    lineHeight: 16,
    color: "#bb4141",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    width: 98,
  },
  description1: {
    color: "rgba(217, 70, 69, 0.5)",
  },
  name: {
    justifyContent: "center",
  },
  description: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tinem: {
    textAlign: "right",
    color: "#bb4141",
  },
  cardcontainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nexteventcard: {
    borderRadius: 10,
    backgroundColor: "#ffebeb",
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  nextEvent: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default EventContainer;
