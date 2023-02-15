import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

const ChatConversation = ({ status1 }) => {
  return (
    <View style={[styles.chatStack, styles.mt24]}>
      <View style={styles.avatar}>
        <View style={styles.story} />
        <View style={[styles.bpWrapper, styles.bpWrapperPosition]}>
          <Text style={styles.bp}>RD</Text>
        </View>
        <Image
          style={[styles.statusIcon, styles.bpWrapperPosition]}
          resizeMode="cover"
          source={status1}
        />
      </View>
      <View style={[styles.dataContainer, styles.ml12]}>
        <View style={styles.chatStack}>
          <Text style={[styles.rakiDevon, styles.howIsItFlexBox]}>
            Raki Devon
          </Text>
          <Text style={[styles.text, styles.ml2, styles.textClr]}>17/6</Text>
        </View>
        <View style={[styles.chatStack, styles.mt4]}>
          <Text style={[styles.howIsIt, styles.textClr, styles.howIsItFlexBox]}>
            How is it going?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml2: {
    marginLeft: 2,
  },
  mt4: {
    marginTop: 4,
  },
  ml12: {
    marginLeft: 12,
  },
  bpWrapperPosition: {
    overflow: "hidden",
    right: "7.14%",
    top: "7.14%",
    position: "absolute",
  },
  howIsItFlexBox: {
    textAlign: "left",
    flex: 1,
    fontSize: 14,
  },
  textClr: {
    color: "rgba(34, 34, 36, 0.3)",
    fontFamily: "Poppins_regular",
  },
  story: {
    top: 0,
    left: 0,
    borderRadius: 18,
    display: "none",
    position: "absolute",
    height: 56,
    width: 56,
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
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    position: "absolute",
  },
  bpWrapper: {
    height: "85.71%",
    width: "85.71%",
    bottom: "7.14%",
    left: "7.14%",
    borderRadius: 100,
    backgroundColor: "#d94645",
  },
  statusIcon: {
    height: "21.43%",
    width: "21.43%",
    bottom: "71.43%",
    left: "71.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
  },
  avatar: {
    height: 56,
    width: 56,
  },
  rakiDevon: {
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#222224",
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: "right",
  },
  chatStack: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  howIsIt: {
    lineHeight: 22,
  },
  dataContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default ChatConversation;
