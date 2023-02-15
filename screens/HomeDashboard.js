import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import EventContainer from "../components/EventContainer";
import ModulesContainer from "../components/ModulesContainer";

const HomeDashboard = () => {
  return (
    <SafeAreaView style={styles.homedashboard}>
      <HomeHeader />
      <ScrollView
        style={[styles.homecontent, styles.mt16]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeContentScrollViewContent}
      >
        <EventContainer />
        <View style={[styles.modules, styles.mt16]}>
          <Text style={styles.title}>Modules</Text>
          <ModulesContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  homeContentScrollViewContent: {
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#222224",
    textAlign: "left",
    alignSelf: "stretch",
  },
  modules: {
    paddingHorizontal: 23,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  homecontent: {
    alignSelf: "stretch",
    flex: 1,
  },
  homedashboard: {
    backgroundColor: "#fff",
    width: "100%",
    height: 1108,
    overflow: "hidden",
    paddingTop: 35,
    alignItems: "center",
    flex: 1,
  },
});

export default HomeDashboard;
