import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const ChatMessageReceived = ({ message, prop }) => {
  return (
    <View style={styles.chatmessagereceiver}>
      <View style={styles.personalChatBubble}>
        <Text style={[styles.messagetext, styles.messagetextTypo]}>
          {message}
        </Text>
        <Text style={[styles.messagetime, styles.mt4, styles.messagetextTypo]}>
          {prop}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  messagetextTypo: {
    textAlign: "left",
    fontFamily: "Poppins_regular",
  },
  messagetext: {
    fontSize: 14,
    lineHeight: 24,
    color: "#0f1828",
  },
  messagetime: {
    fontSize: 10,
    lineHeight: 16,
    color: "#adb5bd",
  },
  personalChatBubble: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "#ffebeb",
    padding: 10,
  },
  chatmessagereceiver: {
    alignSelf: "stretch",
    padding: 10,
  },
});

export default ChatMessageReceived;
