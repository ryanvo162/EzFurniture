import React, { useEffect } from "react";

import { Platform } from "react-native";

import { styles } from "./style";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeTab from "./HomeTab";
import StyleTab from "./StyleTab";
import NotificationTab from "./NoficationTab";
import CartTab from "./CartTab";
import ProfileTab from "./ProfileTab";

import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import { actions, useStore } from "../../provider";

const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
  const { navigation, route } = props;
  const [state, dispatch] = useStore();
  let screen;
  if (route.params) {
    screen = route.params.screen;
  } else {
    screen = "Home";
  }

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@data_user");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log("error:", e);
      }
    };

    const getDataCart = async () => {
      try {
        const value = await AsyncStorage.getItem("@id_cart");
        if (value !== null) {
          return value;
        } else {
          return null;
        }
      } catch (e) {
        console.log("error:", e);
      }
    };

    getDataUser().then((data) => {
      dispatch(
        actions.setUser({
          id: data._id,
          email: data.email,
          name: data.name,
          phone: data.phone,
          addresses: data.addresses,
          avatar: data.avatar,
          dob: data.dob,
        })
      );
    });
    getDataCart().then((data) => {
      dispatch(
        actions.setCart({
          id: data,
        })
      );
    });
  }, []);

  return (
    <>
      <Tab.Navigator
        style={styles.container}
        initialRouteName={screen}
        screenOptions={({ route, headerShown }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let tag;
            if (route.name === "Home") {
              tag = focused ? (
                <Icon.Home stroke={color} height={size} width={size} />
              ) : (
                <Icon.Home stroke={color} />
              );
            } else if (route.name === "Style") {
              tag = focused ? (
                <Icon.Codesandbox stroke={color} height={size} width={size} />
              ) : (
                <Icon.Codesandbox stroke={color} />
              );
            } else if (route.name === "Notification") {
              tag = focused ? (
                <Icon.Bell stroke={color} height={size} width={size} />
              ) : (
                <Icon.Bell stroke={color} />
              );
            } else if (route.name === "Cart") {
              tag = focused ? (
                <Icon.ShoppingCart stroke={color} height={size} width={size} />
              ) : (
                <Icon.ShoppingCart stroke={color} />
              );
            } else if (route.name === "Profile") {
              tag = focused ? (
                <Icon.User stroke={color} height={size} width={size} />
              ) : (
                <Icon.User stroke={color} />
              );
            }
            return tag;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#CCCCCC",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            ...Platform.select({
              ios: {
                position: "absolute",
                marginHorizontal: 0,
                backgroundColor: "rgba(119, 120, 123,0.7)",
                borderRadius: 50,
                bottom: 21,
                marginHorizontal: 26,
                height: 65,
                paddingBottom: 0,
              },
              android: {
                position: "absolute",
                backgroundColor: "rgba(119, 120, 123,0.7)",
                bottom: 21,
                marginHorizontal: 26,
                height: 65,
                borderRadius: 50,
              },
            }),
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
      <StatusBar />
    </>
  );
}
