import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

const ChatMessageReceiver = ({ image, message, timeSent }) => {
  return (
    <View style={styles.chatmessagereceiver}>
      <View style={styles.personalChatBubble}>
        <Image
          style={styles.messageimageIcon}
          resizeMode="cover"
          source={image}
        />
        <Text style={[styles.messagetext, styles.mt4, styles.messagetextTypo]}>
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
  messagetextTypo: {
    textAlign: "left",
    fontFamily: "Poppins_regular",
  },
  messageimageIcon: {
    borderRadius: 4,
    maxWidth: "100%",
    overflow: "hidden",
    height: 150,
    width: "100%",
    alignSelf: "stretch",
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
    padding: 10,
    alignSelf: "stretch",
  },
});

export default ChatMessageReceiver;
