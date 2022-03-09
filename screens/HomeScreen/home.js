import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./style";


export default function HomeScreen(props) {
  const { navigation } = props;

  const handleLogin = () => {
    navigation.replace("HomeScreen");
  };

  const handleGoToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Eazy</Text>
    </View>
  );
}
