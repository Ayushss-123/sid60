import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Wrapper1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.arrowChevronLeft}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow--chevron-left.png")}
          />
        </Pressable>
        <Text style={styles.title}>Athalia Putri</Text>
        <Image
          style={styles.arrowChevronLeft}
          resizeMode="cover"
          source={require("../assets/right-icon.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#181127",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 180,
    height: 24,
    alignItems: "center",
  },
  view: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#ffebeb",
    borderBottomWidth: 2,
    overflow: "hidden",
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Wrapper1;
