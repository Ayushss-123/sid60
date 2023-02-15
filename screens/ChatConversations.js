import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from "react-native";
import MentorChatMessages from "../components/MentorChatMessages";
import ChatConversation from "../components/ChatConversation";
import NewMessageTag from "../components/NewMessageTag";

const ChatConversations = () => {
  return (
    <View style={styles.chatconversations}>
      <ScrollView
        style={[styles.chats, styles.chatsFlexBox]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatsScrollViewContent}
      >
        <MentorChatMessages />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <View style={[styles.chatStack, styles.mt24]}>
          <View style={styles.avatar}>
            <View style={styles.story} />
            <View style={[styles.bpWrapper, styles.bpWrapperPosition]}>
              <Text style={styles.bp}>ES</Text>
            </View>
            <Image
              style={[styles.statusIcon, styles.bpWrapperPosition]}
              resizeMode="cover"
              source={require("../assets/status.png")}
            />
          </View>
          <View
            style={[styles.dataContainer, styles.ml12, styles.chatsFlexBox]}
          >
            <View style={styles.chatStack}>
              <Text style={[styles.erlanSadewa, styles.aightNotedFlexBox]}>
                Erlan Sadewa
              </Text>
              <Text style={[styles.text, styles.ml2, styles.textClr]}>
                17/6
              </Text>
            </View>
            <View style={[styles.chatStack, styles.mt4]}>
              <Text
                style={[
                  styles.aightNoted,
                  styles.textClr,
                  styles.aightNotedFlexBox,
                ]}
              >
                Aight, noted
              </Text>
              <NewMessageTag />
            </View>
          </View>
        </View>
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status1@3x.png" }} />
        <ChatConversation status1={{ uri: "status9@3x.png" }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  ml2: {
    marginLeft: 2,
  },
  mt4: {
    marginTop: 4,
  },
  ml12: {
    marginLeft: 12,
  },
  mt24: {
    marginTop: 24,
  },
  chatsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  mt8: {
    marginTop: 8,
  },
  chatsFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  bpWrapperPosition: {
    right: "7.14%",
    top: "7.14%",
    position: "absolute",
    overflow: "hidden",
  },
  aightNotedFlexBox: {
    textAlign: "left",
    fontSize: 14,
    flex: 1,
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
    width: "100%",
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
  erlanSadewa: {
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
  aightNoted: {
    lineHeight: 22,
  },
  dataContainer: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  chats: {
    alignSelf: "stretch",
  },
  chatconversations: {
    backgroundColor: "#fff",
    height: 848,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ChatConversations;
