import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Snackbar } from "react-native-paper";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";
import { styles as mainStyle } from "../../screens/styles";

export default function SignUpScreen(props) {
  const { navigation } = props;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const [status, setStatus] = useState(null);

  const formatEmail = (email) => {
    // console.log(email);
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // console.log(phoneNumber);
    const pattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return pattern.test(phoneNumber);
  };

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleSignUp = async () => {
    console.log("handleSignUp");
    if (
      email == null ||
      password == null ||
      confirmPassword == null ||
      name == null ||
      phoneNumber == null ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      name == "" ||
      phoneNumber == ""
    ) {
      setStatus("All fields are required");
      onToggleSnackBar();
    } else if (formatEmail(email) == false) {
      setStatus("Email is not valid");
      onToggleSnackBar();
    } else if (password !== confirmPassword) {
      setStatus("Password and re-password does not match");
      onToggleSnackBar();
    } else if (formatPhoneNumber(phoneNumber) == false) {
      setStatus("Phone number is not valid");
      onToggleSnackBar();
    } else {
      const check = await fetch(
        "https://admin.furniture.bandn.online/mobile/createAccount",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === "email is sent") {
            setStatus("Email is sent");
            onToggleSnackBar();
            navigation.replace("OTPScreen", {
              data: {
                email: email,
                password: password,
                name: name,
                phoneNumber: phoneNumber,
              },
            });
          } else {
            setStatus("Email is already used");
            onToggleSnackBar();
          }
        })
        .catch((err) => {
          setStatus("Check server and try again");
          onToggleSnackBar();
          console.log(err);
        });
    }
  };

  const handleGoToLogin = () => {
    navigation.replace("LoginScreen",{message: "check"});
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
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <Text style={styles.titleText}>Register</Text>
              <Text style={styles.subTitleText}>Create a new account</Text>

              <TextInputApp
                onChange={setEmail}
                placeholder="Email"
                autoComplete="email"
                type="email-address"
              />
              <TextInputApp
                onChange={setPassword}
                placeholder="Password"
                autoComplete="password"   
                secureTextEntry={true}
              />
              <TextInputApp
                onChange={setConfirmPassword}
                placeholder="Confirm Password"
                autoComplete="password"
                secureTextEntry={true}
              />
              <TextInputApp
                onChange={setName}
                placeholder="Name"
                autoComplete="name"
              />
              <TextInputApp
                onChange={setPhoneNumber}
                placeholder="Phone"
                type="phone-pad"
                autoComplete="phone"
              />

              <AuthButton />
              <ButtonApp
                text="Sign Up"
                backgroundColor="brown"
                onPress={handleSignUp}
              />
              <Text style={styles.textNote}>
                Already have an account?{" "}
                <Text onPress={handleGoToLogin} style={styles.boldText}>
                  Sign in.
                </Text>
              </Text>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Snackbar
        visible={visible}
        duration={2000}
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
