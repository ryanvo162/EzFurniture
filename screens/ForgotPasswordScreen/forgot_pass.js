import { View, Text, Image,Pressable } from "react-native";
import React, { useState } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import * as Icon from "react-native-feather";

export default function ForgotPasswordScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={handleGoBack}>
        <Icon.ChevronLeft stroke="#000000" width={32} height={32} />
        <Text style={styles.titleBack}> Forgot Password </Text>
      </Pressable>
      <Text style={styles.titleText}>Please enter email address</Text>
      <Text style={styles.titleText}>or phone number:</Text>

      <View style={styles.center}>
        {/* text input */}
        <TextInputApp onChange={setEmail} placeholder="Email address..." />
        <Image style={styles.image} source={require("../../assets/img/forgotpass.png")} />
        {/* button app */}
        <ButtonApp text="Send" />
      </View>
    </View>
  );
}
