import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import { styles } from "./style";
import TextInputApp from "../../components/InputText";
import ButtonApp from "../../components/Button";
import AuthButton from "../../components/AuthButton";

export default function SignUpScreen(props) {
  const { navigation } = props;

  const handleSignUp = () => {
    navigation.replace("OTPScreen");
  };

  const handleGoToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require("../../assets/img/imageHeaderLogin.png")}
      />
      <ScrollView overScrollMode="never" contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        <Text style={styles.titleText}>Register</Text>
        <Text style={styles.subTitleText}>Create a new account</Text>
        {/* text input */}
        <TextInputApp placeholder="Email..." />
        <TextInputApp placeholder="Password..."/>
        <TextInputApp placeholder="Phone..." type="phone-pad"/>
        <TextInputApp placeholder="Name..." />
        {/* google and facebook */}
        <AuthButton />
        {/* button app */}
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
  );
}
