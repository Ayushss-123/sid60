import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewMessageTag from "../components/NewMessageTag";

const MentorChatMessages = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.chatStack}
      onPress={() => navigation.navigate("ChatMessages")}
    >
      <View style={styles.storyLayout}>
        <View style={[styles.story, styles.storyLayout]} />
        <View style={styles.apWrapper}>
          <Text style={styles.ap}>AP</Text>
        </View>
        <Image
          style={styles.statusIcon}
          resizeMode="cover"
          source={require("../assets/status4.png")}
        />
      </View>
      <View style={[styles.dataContainer, styles.ml12]}>
        <View style={styles.name}>
          <View style={styles.athaliaPutriParent}>
            <Text style={[styles.athaliaPutri, styles.athaliaPutriTypo]}>
              Athalia Putri
            </Text>
            <View style={[styles.mentorWrapper, styles.ml8]}>
              <Text style={styles.mentor}>Mentor</Text>
            </View>
          </View>
          <Text style={[styles.text, styles.textClr]}>Today</Text>
        </View>
        <View style={[styles.chatStack, styles.mt4]}>
          <Text
            style={[
              styles.goodMorningDid,
              styles.textClr,
              styles.athaliaPutriTypo,
            ]}
          >
            Good morning, did you sleep well?
          </Text>
          <NewMessageTag />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
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
  storyLayout: {
    height: 56,
    width: 56,
  },
  athaliaPutriTypo: {
    textAlign: "left",
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
  },
  ap: {
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
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    position: "absolute",
  },
  apWrapper: {
    height: "85.71%",
    width: "85.71%",
    top: "7.14%",
    right: "7.14%",
    bottom: "7.14%",
    left: "7.14%",
    borderRadius: 100,
    backgroundColor: "#d94645",
    overflow: "hidden",
    position: "absolute",
  },
  statusIcon: {
    height: "28.57%",
    width: "28.57%",
    top: "67.86%",
    right: "0%",
    bottom: "3.57%",
    left: "71.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  athaliaPutri: {
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#222224",
  },
  mentor: {
    color: "#fcfcfc",
    fontFamily: "Poppins_regular",
    lineHeight: 18,
    fontSize: 13,
    textAlign: "left",
  },
  mentorWrapper: {
    borderRadius: 4,
    backgroundColor: "#00ba88",
    paddingHorizontal: 4,
    paddingVertical: 1,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  athaliaPutriParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: 13,
    color: "rgba(34, 34, 36, 0.3)",
  },
  name: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  goodMorningDid: {
    lineHeight: 22,
    flex: 1,
  },
  chatStack: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dataContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default MentorChatMessages;
