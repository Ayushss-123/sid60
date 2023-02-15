const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import Notifications from "./screens/Notifications";
import Notifications1 from "./screens/Notifications1";
import ChatMessages from "./screens/ChatMessages";
import ChatConversations from "./screens/ChatConversations";
import UserProfile from "./screens/UserProfile";
import CalendarEvents from "./screens/CalendarEvents";
import HomeDashboard from "./screens/HomeDashboard";
import JoinClassModal from "./screens/JoinClassModal";
import Splash from "./screens/Splash";
import Home1 from "./components/Home1";
import Home from "./components/Home";
import Events3 from "./components/Events3";
import Events2 from "./components/Events2";
import Events1 from "./components/Events1";
import Events from "./components/Events";
import Profile1 from "./components/Profile1";
import Profile from "./components/Profile";
import Wrapper from "./components/Wrapper";
import NotificationsHeader from "./components/NotificationsHeader";
import Wrapper1 from "./components/Wrapper1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Home />,
    <Events2 />,
    <Events />,
    <Profile />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Home1 />,
    <Events3 />,
    <Events1 />,
    <Profile1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              borderStyle: "solid",
              borderColor: "#ffebeb",
              borderTopWidth: 2,
              flexDirection: "row",
              paddingHorizontal: 24,
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "space-between",
              height: 86,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CalendarEvents"
        component={CalendarEvents}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ChatConversations"
        component={ChatConversations}
        options={(props) => ({
          headerShown: true,
          header: () => <Wrapper />,
        })}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Lato: require("./assets/fonts/Lato.ttf"),
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    Mulish: require("./assets/fonts/Mulish.ttf"),
    Mulish_regular: require("./assets/fonts/Mulish_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications1"
              component={Notifications1}
              options={(props) => ({
                headerShown: true,
                header: () => <NotificationsHeader />,
              })}
            />
            <Stack.Screen
              name="ChatMessages"
              component={ChatMessages}
              options={(props) => ({
                headerShown: true,
                header: () => <Wrapper1 />,
              })}
            />
            <Stack.Screen
              name="JoinClassModal"
              component={JoinClassModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
