import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Events = ({ style }) => {
  return (
    <View style={[styles.events, style]}>
      <Image
        style={styles.chatConversationCircleIcon}
        resizeMode="cover"
        source={require("../assets/chat-conversation-circle.png")}
      />
      <Text style={[styles.chat, styles.mt8]}>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  chatConversationCircleIcon: {
    width: 32,
    height: 32,
  },
  chat: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
    fontFamily: "Poppins_regular",
    color: "#222224",
    textAlign: "center",
    width: 55,
  },
  events: {
    alignItems: "center",
  },
});

export default Events;
