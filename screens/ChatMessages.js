import * as React from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import ChatMessageReceiver from "../components/ChatMessageReceiver";
import ChatMessageReceived from "../components/ChatMessageReceived";
import ChatMessageSent from "../components/ChatMessageSent";

const ChatMessages = () => {
  return (
    <View style={[styles.chatmessages, styles.divider1FlexBox]}>
      <ScrollView
        style={styles.chatmessagescontainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatMessagesContainerScrollViewContent}
      >
        <ChatMessageReceiver
          image={`https://cdn.sanity.io/images/uf1om34c/production/39ede079b9b31b08a20af6232190a332d6c2f085-1163x622.png?rect=29,0,1106,622&w=1200&h=675&fm=webp&q=80&fit=crop&auto=format`}
          message="Look at this awesome message!"
          timeSent="14:00pm"
        />
        <ChatMessageReceived message="Can I come over?" prop="16.46" />
        <ChatMessageSent message="I'm on my way" timeSent="16.50 " />
        <View style={[styles.divider, styles.dividerFlexBox]}>
          <View style={[styles.divider1, styles.divider1FlexBox]}>
            <Image
              style={styles.dividerChild}
              resizeMode="cover"
              source={require("../assets/vector-1.png")}
            />
          </View>
          <Text style={[styles.text, styles.ml16]}>Sat, 17/10</Text>
          <View style={[styles.divider1, styles.ml16, styles.divider1FlexBox]}>
            <Image
              style={styles.dividerChild}
              resizeMode="cover"
              source={require("../assets/vector-11.png")}
            />
          </View>
        </View>
        <ChatMessageSent
          message="But don’t worry cause we are all learning "
          timeSent="09.13 · Read"
        />
        <ChatMessageReceived
          message="Good morning, did you sleep?"
          prop="09.45"
        />
        <ChatMessageReceived
          message="Good morning, did you sleep?"
          prop="09.45"
        />
        <ChatMessageReceived
          message="Good morning, did you sleep?"
          prop="09.45"
        />
        <ChatMessageReceived
          message="Good morning, did you sleep?"
          prop="09.45"
        />
      </ScrollView>
      <View
        style={[
          styles.inputMessageField,
          styles.chatmessageinputBorder,
          styles.dividerFlexBox,
        ]}
      >
        <Image
          style={styles.attachbuttonIcon}
          resizeMode="cover"
          source={require("../assets/attachbutton.png")}
        />
        <TextInput
          style={[
            styles.chatmessageinput,
            styles.ml16,
            styles.chatmessageinputBorder,
          ]}
          placeholder="Type here..."
          keyboardType="default"
          multiline
          autoCapitalize="sentences"
          placeholderTextColor="#0f1828"
        />
        <Image
          style={[styles.attachbuttonIcon, styles.ml16]}
          resizeMode="cover"
          source={require("../assets/sendmessagebutton.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  ml16: {
    marginLeft: 16,
  },
  chatMessagesContainerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 0,
  },
  divider1FlexBox: {
    alignItems: "center",
    flex: 1,
  },
  dividerFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  chatmessageinputBorder: {
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
  dividerChild: {
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  divider1: {
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "Mulish_regular",
    color: "#adb5bd",
    textAlign: "left",
  },
  divider: {
    width: 351,
    justifyContent: "center",
  },
  chatmessagescontainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  attachbuttonIcon: {
    width: 24,
    height: 24,
  },
  chatmessageinput: {
    borderRadius: 8,
    borderColor: "rgba(34, 34, 36, 0.3)",
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: "center",
    flex: 1,
  },
  inputMessageField: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    height: 84,
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignSelf: "stretch",
  },
  chatmessages: {
    height: 845,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default ChatMessages;
