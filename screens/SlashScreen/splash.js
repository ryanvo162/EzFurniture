import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Image } from "react-native";

import { styles } from "./style";

export default function SplashScreen(props) {

  const { navigation } = props;

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(() =>
          setTimeout(() => {
            navigation.replace("WelcomeScreen");
          }, 2000)
        );
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/logo.png")} />
      <StatusBar hidden />
    </View>
  );
}


