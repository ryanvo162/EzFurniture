import { View, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./style";

export default function AuthButton(props) {
  const { onLoginFacebook, onLoginGoogle, disabled } = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={onLoginGoogle}>
        <Image
          style={styles.imageAuth}
          source={require("../../assets/img/logo_gg.png")}
        />
      </Pressable>
      <Pressable disabled={disabled} onPress={onLoginFacebook}>
        <Image
          style={styles.imageAuth}
          source={require("../../assets/img/logo_fb.png")}
        />
      </Pressable>
    </View>
  );
}
