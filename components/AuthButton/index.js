import { View, Pressable, Image } from "react-native";
import React from 'react'
import { styles } from "./style";

export default function AuthButton() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.imageAuth}
          source={require("../../assets/img/logo_gg.png")}
        />
      </Pressable>
      <Pressable>
        <Image
          style={styles.imageAuth}
          source={require("../../assets/img/logo_fb.png")}
        />
      </Pressable>
    </View>
  );
}