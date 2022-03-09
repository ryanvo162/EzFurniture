import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";

export default function LoginScreen(props) {
  const { navigation } = props;

  const handleLogin = () => {
    navigation.replace("HomeScreen");
  };

  const handleGoToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require("../../assets/img/imageHeaderLogin.png")}
      />
      <Text style={styles.titleText}>Welcome to Eazy</Text>
      <Text style={styles.subTitleText}>Login to your account</Text>
      {/* text input */}
      <TextInputApp placeholder="Email or phone..." />
      <TextInputApp style={styles.inputTextEmail} placeholder="Password..." />
      <Text style={styles.textForgotPassword}>Forgot Password?</Text>
      {/* google and facebook */}
      <AuthButton />
      {/* button app */}
      <ButtonApp text="Login" backgroundColor="brown" onPress={handleLogin} />
      <Text style={styles.textNote}>
        Haven't an account? <Text onPress={handleGoToSignUp} style={styles.boldText}>Create a new one.</Text>
      </Text>
    </View>
  );
}
