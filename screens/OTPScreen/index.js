import { View, Text, Image } from "react-native";
import React, { useState } from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";

export default function OTPScreen(props) {
  const { navigation } = props;

  const [email, setEmail] = useState("");

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
          The time remaining to enter the code is:
          <Text style={styles.timeVerify}>props</Text>
        </Text>
      </View>

      {/* text input */}
      <TextInputApp
        type="number-pad"
        onChange={setEmail}
        placeholder="Enter OTP..."
      />
      {/* button app */}
      <ButtonApp text="Verify" backgroundColor="brown" />
    </View>
  );
}
