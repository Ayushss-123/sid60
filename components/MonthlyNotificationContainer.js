import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const MonthlyNotificationContainer = () => {
  return (
    <View style={[styles.thisMonthNotification, styles.mt24]}>
      <Text style={styles.thisMonth}>This month</Text>
      <View style={[styles.chatStack, styles.mt24, styles.bpFlexBox]}>
        <View style={styles.storyLayout}>
          <View style={[styles.story, styles.storyLayout]} />
          <View
            style={[
              styles.bpWrapper,
              styles.bpWrapperLayout,
              styles.bpWrapperPosition,
            ]}
          >
            <Text style={[styles.bp, styles.bpFlexBox]}>RED</Text>
          </View>
          <Image
            style={[styles.statusIcon, styles.bpWrapperPosition]}
            resizeMode="cover"
            source={require("../assets/status.png")}
          />
        </View>
        <View style={[styles.dataContainer, styles.ml12]}>
          <Text style={styles.thisMonth}>
            Mathew was the first to complete the Finance Module!
          </Text>
          <Text style={[styles.gotA25, styles.mt4, styles.gotA25Typo]}>
            Got a $25 Amazon Gift Card
          </Text>
          <Text style={[styles.today1223Am, styles.mt4, styles.gotA25Typo]}>
            Today, 12:23 AM
          </Text>
        </View>
      </View>
      <View style={[styles.chatStack, styles.mt24, styles.bpFlexBox]}>
        <View style={styles.storyLayout}>
          <View style={[styles.story, styles.storyLayout]} />
          <View
            style={[
              styles.bpWrapper,
              styles.bpWrapperLayout,
              styles.bpWrapperPosition,
            ]}
          >
            <Text style={[styles.bp, styles.bpFlexBox]}>RED</Text>
          </View>
          <Image
            style={[styles.statusIcon, styles.bpWrapperPosition]}
            resizeMode="cover"
            source={require("../assets/status.png")}
          />
        </View>
        <View style={[styles.dataContainer, styles.ml12]}>
          <Text style={styles.thisMonth}>
            Tom got the highest score on the Know Your Rights Module!
          </Text>
          <Text style={[styles.gotA25, styles.mt4, styles.gotA25Typo]}>
            Got a $25 Amazon Gift Card
          </Text>
          <Text style={[styles.today1223Am, styles.mt4, styles.gotA25Typo]}>
            Today, 12:23 AM
          </Text>
        </View>
      </View>
      <View style={[styles.chatStack, styles.mt24, styles.bpFlexBox]}>
        <Image
          style={[styles.avatarIcon, styles.bpWrapperLayout]}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={[styles.dataContainer, styles.ml12]}>
          <Text style={styles.thisMonth}>Jessica</Text>
          <Text style={[styles.gotA25, styles.mt4, styles.gotA25Typo]}>
            Hi students! Hope you’re well. Don’t forget to bring your laptops!
          </Text>
          <Text style={[styles.today1223Am, styles.mt4, styles.gotA25Typo]}>
            Today, 12:23 AM
          </Text>
        </View>
      </View>
      <View style={[styles.chatStack, styles.mt24, styles.bpFlexBox]}>
        <Image
          style={[styles.avatarIcon, styles.bpWrapperLayout]}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={[styles.dataContainer, styles.ml12]}>
          <Text style={styles.thisMonth}>Jessica</Text>
          <Text style={[styles.gotA25, styles.mt4, styles.gotA25Typo]}>
            Hi students! Hope you’re well. Don’t forget to bring your laptops!
          </Text>
          <Text style={[styles.today1223Am, styles.mt4, styles.gotA25Typo]}>
            Today, 12:23 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  ml12: {
    marginLeft: 12,
  },
  mt24: {
    marginTop: 24,
  },
  bpFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  storyLayout: {
    height: 56,
    width: 56,
  },
  bpWrapperLayout: {
    borderRadius: 100,
    overflow: "hidden",
  },
  bpWrapperPosition: {
    right: "7.14%",
    top: "7.14%",
    position: "absolute",
  },
  gotA25Typo: {
    fontFamily: "Poppins_regular",
    textAlign: "left",
    alignSelf: "stretch",
  },
  thisMonth: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    textAlign: "left",
    color: "#222224",
    alignSelf: "stretch",
  },
  story: {
    top: 0,
    left: 0,
    borderRadius: 18,
    display: "none",
    position: "absolute",
  },
  bp: {
    height: "35.42%",
    width: "100%",
    top: "33.33%",
    left: "0%",
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Lato_bold",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    fontSize: 14,
    position: "absolute",
  },
  bpWrapper: {
    height: "85.71%",
    width: "85.71%",
    bottom: "7.14%",
    left: "7.14%",
    backgroundColor: "#d94645",
    overflow: "hidden",
  },
  statusIcon: {
    height: "21.43%",
    width: "21.43%",
    bottom: "71.43%",
    left: "71.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    display: "none",
  },
  gotA25: {
    lineHeight: 22,
    fontSize: 14,
    color: "#222224",
    fontFamily: "Poppins_regular",
  },
  today1223Am: {
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(34, 34, 36, 0.3)",
  },
  dataContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  chatStack: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  avatarIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  thisMonthNotification: {
    paddingHorizontal: 24,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default MonthlyNotificationContainer;
