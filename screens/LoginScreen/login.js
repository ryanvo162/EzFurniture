import { View, Text, Image } from "react-native";
import React, { useState } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure();

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
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
    // } else {
    // console.log("Ngu lồn rồi");
    //   }
    // })
    // .catch((err) => {
    //   console.log("Lỗi rồi");
    //   console.log(err);
    // });
  };

  const handleGoToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const handleGoToForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  // connect login facebook
  const handleLoginFacebook = () => {
    console.log("masseger: ERORR_Facebook");
  };

  // connect login google
  const handleLoginGoogle = () => {
    // console.log("masseger: ERRORRR_Google");
    // signIn = async () => {
    //   try {
    //     await GoogleSignin.hasPlayServices();
    //     const userInfo = await GoogleSignin.signIn();
    //     this.setState({ userInfo });
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       // user cancelled the login flow
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       // operation (e.g. sign in) is in progress already
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //       // play services not available or outdated
    //     } else {
    //       // some other error happened
    //     }
    //   }
    // };
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
  );
}
