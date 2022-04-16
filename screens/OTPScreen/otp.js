import {
  View,
  Text,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import { Snackbar } from "react-native-paper";

import { styles as mainStyle } from "../../screens/styles";

export default function OTPScreen(props) {
  const { navigation, route } = props;
  const { data } = route.params;

  const [status, setStatus] = useState(null);

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [timerCount, setTimer] = useState(60);

  const [otp, setOTP] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  const handleVerify = async () => {
    console.log("handleVerify");
    if (otp.length === 6 && otp !== "") {
      const check = await fetch(
        "https://admin.furniture.bandn.online/mobile/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            name: data.name,
            dob: "01/06/2000",
            phone: data.phoneNumber,
            code: otp,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === true) {
            setStatus("Sign up successfully");
            onToggleSnackBar();
            navigation.replace("LoginScreen", { message: "Login success", data: data });
          } else {
            setStatus("Wrong OTP or out of date");
            onToggleSnackBar();
          }
        })
        .catch((err) => {
          setStatus("Check server and try again");
          onToggleSnackBar();
          console.log(err);
        });
    } else {
      setStatus("Please enter a valid OTP");
      onToggleSnackBar();
    }
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
              <Text style={styles.titleText}>OTP Verification</Text>

              <View style={styles.textView}>
                <Text style={styles.subTitleText}>
                  Please enter OTP sent to your email
                </Text>
                <Text style={styles.subTitleTextOne}>
                  The time remaining to enter the code is:{" "}
                  <Text style={styles.timeVerify}>{timerCount} seconds</Text>
                </Text>
              </View>

              {/* text input */}
              <TextInputApp
                type="number-pad"
                onChange={setOTP}
                placeholder="Enter OTP"
              />
              {/* button app */}
              <ButtonApp onPress={handleVerify} text="Verify" />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Snackbar
        visible={visible}
        duration={1000}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
      >
        {status}
      </Snackbar>
    </>
  );
}
