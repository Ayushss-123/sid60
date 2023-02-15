import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Events1 = ({ style }) => {
  return (
    <View style={[styles.events, style]}>
      <Image
        style={styles.chatConversationCircle1Icon}
        resizeMode="cover"
        source={require("../assets/chat-conversation-circle-1.png")}
      />
      <Text style={[styles.chat, styles.mt8]}>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  chatConversationCircle1Icon: {
    width: 32,
    height: 32,
  },
  chat: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#d94645",
    textAlign: "center",
    width: 55,
  },
  events: {
    alignItems: "center",
  },
});

export default Events1;
