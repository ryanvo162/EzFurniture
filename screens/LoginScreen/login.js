import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
} from "react-native";
import { Snackbar } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";
import { styles as mainStyle } from "../../screens/styles";

export default function LoginScreen(props) {
  const { navigation } = props;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  // Facebook
  // const [request, response, promptAsync] = Facebook.useAuthRequest({
  //   expoClientId: "2640390062761981",
  //   responseType: ResponseType.Code,
  // });

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { code } = response.params;
  //   }
  // }, [response]);

  const formatEmail = (email) => {
    console.log(email);
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  };

  const handleLogin = async () => {
    console.log("handleLogin");
    // console.log(email);
    if (email == null || password == null || email == "" || password == "") {
      setStatus("Email and password cannot be empty");
      onToggleSnackBar();
    } else if (formatEmail(email) == false) {
      setStatus("Email is not valid");
      onToggleSnackBar();
    } else {
      // const check = await fetch(
      //   "https://admin.furniture.bandn.online/mobile/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res.payload.status);
      //     setStatus(res.payload.status);
      //     if (res.payload.status === true) {
      navigation.navigate("HomeScreen");
      //   } else {
      //     console.log("Login failed");
      //   }
      // })
      // .catch((err) => {
      //   console.log("Lỗi rồi");
      //   console.log(err);
      // });
    }
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
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Image
              style={styles.imageHeader}
              source={require("../../assets/img/imageHeaderLogin.png")}
            />
            <ScrollView
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            >
              <Text style={styles.textLogin}>Login</Text>
              <Text style={styles.textWelcome}>Welcome to EzFurniture</Text>
              <TextInputApp
                onChange={setEmail}
                autoComplete="email"
                placeholder="Email"
                type="email-address"
              />
              <TextInputApp
                onChange={setPassword}
                style={styles.inputTextEmail}
                autoComplete="password"
                type="visible-password"
                placeholder="Password"
                secureTextEntry={true}
              />
              <Text
                onPress={handleGoToForgotPassword}
                style={styles.textForgotPassword}
              >
                Forgot Password?
              </Text>
              <AuthButton
                // disabled={!request}
                // onLoginFacebook={handleLoginFacebook}
                // onLoginGoogle={handleLoginGoogle}
              />
              <ButtonApp
                text="Login"
                backgroundColor="brown"
                onPress={handleLogin}
              />
              <Text style={styles.textNote}>
                Haven't an account?{" "}
                <Text onPress={handleGoToSignUp} style={styles.boldText}>
                  Create a new one.
                </Text>
              </Text>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Snackbar
        visible={visible}
        duration={1000}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Hide",
          onPress: () => {
            // Do something
          },
        }}
      >
        {status}
      </Snackbar>
    </>
  );
}
