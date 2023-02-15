import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Switch,
  View,
  Image,
} from "react-native";

const CalendarEvents = () => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View style={styles.calendarevents}>
      <ScrollView
        style={styles.content}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <Text style={styles.title}>Upcoming and past events</Text>
        <View style={[styles.switchLabel, styles.mt24]}>
          <Text style={styles.pastEvents}>Past events</Text>
          <Switch
            style={[styles.switch, styles.ml8]}
            value={switchValue}
            onValueChange={setSwitchValue}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#d94645" }}
          />
          <Text style={[styles.pastEvents, styles.ml8]}>Upcoming events</Text>
        </View>
        <ScrollView
          style={[styles.content, styles.mt24]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.upcomingEventsScrollViewContent}
        >
          <View style={[styles.event, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.switchLabel}>
              <View style={styles.day}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.timeTypo]}>18:00-19:30</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  ml16: {
    marginLeft: 16,
  },
  mt16: {
    marginTop: 16,
  },
  upcomingEventsScrollViewContent: {
    flexDirection: "column",
  },
  mt24: {
    marginTop: 24,
  },
  contentScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 22,
    paddingTop: 35,
  },
  eventBorder: {
    borderColor: "rgba(34, 34, 36, 0.22)",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  janTypo: {
    color: "#d94645",
    lineHeight: 26,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
  },
  eventNameLayout: {
    width: 98,
    textAlign: "left",
  },
  timeTypo: {
    lineHeight: 18,
    fontSize: 13,
    fontFamily: "Poppins_regular",
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#222224",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  pastEvents: {
    textAlign: "left",
    fontFamily: "Poppins_regular",
    lineHeight: 26,
    fontSize: 16,
    color: "#222224",
  },
  switch: {
    borderRadius: 100,
    paddingLeft: 32,
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    flexDirection: "row",
  },
  switchLabel: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    width: 30,
  },
  jan: {
    width: 50,
  },
  day: {
    alignItems: "center",
  },
  divider: {
    borderRightWidth: 1,
    width: 1,
  },
  eventName: {
    fontSize: 14,
    lineHeight: 16,
    color: "#222224",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    width: 98,
  },
  description1: {
    color: "rgba(34, 34, 36, 0.5)",
  },
  name: {
    justifyContent: "center",
  },
  time: {
    textAlign: "right",
    color: "#222224",
  },
  event: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  calendarevents: {
    backgroundColor: "#fff",
    width: "100%",
    height: 828,
    paddingTop: 35,
    alignItems: "center",
    flex: 1,
  },
});

export default CalendarEvents;
