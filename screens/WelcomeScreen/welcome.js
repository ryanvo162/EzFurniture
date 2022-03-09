import { View, Text, ImageBackground } from "react-native";
import React from "react";

import { styles } from "./style";
import IntroView from "../../components/IntroView";


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/welcome_bg1.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <IntroView />
      </ImageBackground>
    </View>
  );
}
