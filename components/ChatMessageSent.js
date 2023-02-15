import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const ChatMessageSent = ({ message, timeSent }) => {
  return (
    <View style={[styles.chatmessagesender, styles.chatmessagesenderFlexBox]}>
      <View
        style={[styles.personalChatBubble, styles.chatmessagesenderFlexBox]}
      >
        <Text style={[styles.messagetext, styles.messagetextTypo]}>
          {message}
        </Text>
        <Text style={[styles.messagetime, styles.mt4, styles.messagetextTypo]}>
          {timeSent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  chatmessagesenderFlexBox: {
    alignItems: "flex-end",
    padding: 10,
  },
  messagetextTypo: {
    textAlign: "left",
    color: "#fff",
    fontFamily: "Poppins_regular",
  },
  messagetext: {
    fontSize: 14,
    lineHeight: 24,
  },
  messagetime: {
    fontSize: 10,
    lineHeight: 16,
  },
  personalChatBubble: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#d94645",
  },
  chatmessagesender: {
    alignSelf: "stretch",
  },
});

export default ChatMessageSent;
