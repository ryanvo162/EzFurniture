import {
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import * as Icon from "react-native-feather";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../screens/styles";

export default function ForgotPasswordScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleSend = async () => {
    await fetch("https://admin.furniture.bandn.online/mobile/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === true) {
          setStatus("Send successfully");
          onToggleSnackBar();
          navigation.replace("OTPScreen", {userID: response.userID});
        } else {
          setStatus("Send failed");
          onToggleSnackBar();
        }
      })
      .catch((error) => {
        setStatus("Send failed");
        onToggleSnackBar();
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={styles.scrollView}
          >
            {/* text input */}
            <Text style={styles.titleText}>Please enter email address</Text>
            <Text style={styles.titleText}>or phone number:</Text>
            <View style={styles.center}>
              <TextInputApp
                onChange={setEmail}
                placeholder="Email address..."
              />
              <Image
                style={styles.image}
                source={require("../../assets/img/forgotpass.png")}
              />
              {/* button app */}
              <ButtonApp onPress={handleSend} text="Send" />
            </View>
          </ScrollView>

          <Snackbar
            visible={visible}
            duration={1500}
            style={[mainStyle.snackbar, styles.snackbar]}
            onDismiss={onDismissSnackBar}
          >
            {status}
          </Snackbar>
          <View style={styles.header}>
            <Pressable style={styles.back} onPress={handleGoBack}>
              <Icon.ChevronLeft stroke="black" width={32} height={32} />
              <Text style={styles.titleBack}>Forgot Password</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
