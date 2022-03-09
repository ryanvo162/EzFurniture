import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import SlashScreen from "./SlashScreen/splash";
import WelcomeScreen from "./WelcomeScreen/welcome";
import LoginScreen from "./LoginScreen/login";
import HomeScreen from "./HomeScreen/home";
import SignUpScreen from "./SignUpScreen/signup";

export default function AppProvider() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="SlashScreen">
        <Stack.Screen
          name="SlashScreen"
          component={SlashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
