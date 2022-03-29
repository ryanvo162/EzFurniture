import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  // Facebook
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: "2640390062761981",
    responseType: ResponseType.Code,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  const handleLogin = async () => {
    const check = await fetch(
      "https://admin.furniture.bandn.online/mobile/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.payload.status);
        setStatus(res.payload.status);
        if (res.payload.status === true) {
          navigation.navigate("HomeScreen");
        } else {
          console.log("Login failed");
        }
      })
      .catch((err) => {
        console.log("Lỗi rồi");
        console.log(err);
      });
  };

  const handleGoToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const handleGoToForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  // connect login facebook
  const handleLoginFacebook = () => {
    console.log("Login Facebook");
    promptAsync();
  };

  // connect login google
  const handleLoginGoogle = () => {
    console.log("Login Google");
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require("../../assets/img/imageHeaderLogin.png")}
      />
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      {/* text input */}
      <TextInputApp onChange={setEmail} placeholder="Email or phone..." />
      <TextInputApp
        onChange={setPassword}
        style={styles.inputTextEmail}
        placeholder="Password..."
      />
      <Text
        onPress={handleGoToForgotPassword}
        style={styles.textForgotPassword}
      >
        Forgot Password?
      </Text>
      {/* google and facebook */}
      <AuthButton
        disabled={!request}
        onLoginFacebook={handleLoginFacebook}
        onLoginGoogle={handleLoginGoogle}
      />

      {/* button app */}
      <ButtonApp text="Login" backgroundColor="brown" onPress={handleLogin} />
      <Text style={styles.textNote}>
        Haven't an account?{" "}
        <Text onPress={handleGoToSignUp} style={styles.boldText}>
          Create a new one.
        </Text>
      </Text>
    </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}
