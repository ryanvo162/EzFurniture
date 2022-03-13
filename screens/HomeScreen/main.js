import React from "react";

import { Platform } from "react-native";

import { styles } from "./style";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "./HomeTab";
import StyleTab from "./StyleTab";
import NotificationTab from "./NoficationTab";
import CartTab from "./CartTab";
import ProfileTab from "./ProfileTab";

import * as Icon from "react-native-feather";

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
  const { navigation } = props;

  return (
    <Tab.Navigator
      style={styles.container}
      initialRouteName="Home"
      screenOptions={({ route, headerShown }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let tag;

          if (route.name === "Home") {
            tag = focused ? (
              <Icon.Home stroke={color} />
            ) : (
              <Icon.Home stroke={color} />
            );
          } else if (route.name === "Style") {
            tag = focused ? (
              <Icon.Codesandbox stroke={color} />
            ) : (
              <Icon.Codesandbox stroke={color} />
            );
          } else if (route.name === "Notification") {
            tag = focused ? (
              <Icon.Bell stroke={color} />
            ) : (
              <Icon.Bell stroke={color} />
            );
          } else if (route.name === "Cart") {
            tag = focused ? (
              <Icon.ShoppingCart stroke={color} />
            ) : (
              <Icon.ShoppingCart stroke={color} />
            );
          } else if (route.name === "Profile") {
            tag = focused ? (
              <Icon.User stroke={color} />
            ) : (
              <Icon.User stroke={color} />
            );
          }

          // You can return any component that you like here!
          return tag;

          // return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#CCCCCC",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(119, 120, 123,0.7)",
          position: "absolute",
          bottom: 21,
          marginHorizontal: 26,
          height: 65,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Style"
        component={StyleTab}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTab}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationTab}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
