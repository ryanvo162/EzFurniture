import { View, Text, Image } from "react-native";
import React, { useState,useEffect,useRef } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";

export default function OTPScreen(props) {
  const { navigation, route } = props;

  const [timerCount, setTimer] = useState(60);

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

  const [otp, setOTP] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require("../../assets/img/imageHeaderLogin.png")}
      />
      <Text style={styles.titleText}>OTP Verification</Text>

      <View style={styles.textView}>
        <Text style={styles.subTitleText}>Please enter OTP verification</Text>
        <Text style={styles.subTitleTextOne}>
          The time remaining to enter the code is:{" "}
          <Text style={styles.timeVerify}>{timerCount}{" "}seconds</Text>
        </Text>
      </View>

      {/* text input */}
      <TextInputApp
        type="number-pad"
        onChange={setOTP}
        placeholder="Enter OTP..."
      />
      {/* button app */}
      <ButtonApp text="Verify"/>
    </View>
  );
}
