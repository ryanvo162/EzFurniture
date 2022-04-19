import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import ButtonApp from "../../components/Button";
import {
  blackColor,
  whiteColor,
  primaryColor,
  gray1Color,
  gray2Color,
  gray3Color,
} from "../../global/colors";
import { useStore } from "../../provider";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../screens/styles";

export default function ChangePasswordScreen(props) {
  const { navigation } = props;
  const [state, dispatch] = useStore();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setStatus("Password not match");
      onToggleSnackBar();
    } else if (newPassword.length < 6) {
      setStatus("Password must be at least 6 characters");
      onToggleSnackBar();
    } else {
      await fetch(
        "https://admin.furniture.bandn.online/mobile/changePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: state.user.id,
            password: oldPassword,
            newPassword: newPassword,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          if (res.payload.status === true) {
            setStatus("Change password success");
            onToggleSnackBar();
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
          } else {
            setStatus(
              "Old password is not correct or new password is same with old password"
            );
            onToggleSnackBar();
          }
        })
        .catch((err) => {
          console.log(err);
          setStatus("Check server connection");
          onToggleSnackBar();
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={gray3Color}
            color={blackColor}
            cursorColor={primaryColor}
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
            selectionColor={primaryColor}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor={gray3Color}
            color={blackColor}
            cursorColor={primaryColor}
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
            selectionColor={primaryColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor={gray3Color}
            color={blackColor}
            cursorColor={primaryColor}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            selectionColor={primaryColor}
          />
        </View>

        <View style={styles.buttonContainer}>
          <ButtonApp text="Save" onPress={handleChangePassword} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/img/change_password.png")}
          />
        </View>
      </ScrollView>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke={blackColor} />
          <Text style={styles.headerLeftText}>Change Password</Text>
        </Pressable>
      </View>
      <Snackbar
        visible={visible}
        duration={1000}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
      >
        {status}
      </Snackbar>
    </View>
  );
}
