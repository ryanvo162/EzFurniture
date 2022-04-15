import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Button, Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";

import { gray2Color } from "../../global/colors";
import ButtonApp from "../../components/Button";
import { styles as mainStyle } from "../../screens/styles";
import { useStore } from "../../provider";

export default function InformationScreen(props) {
  const { navigation } = props;

  const [state, dispatch] = useStore();

  console.log("state:", state);

  const [name, setName] = useState(state.user.name ?? "");
  const [email, setEmail] = useState(state.user.email ?? "");
  const [phone, setPhone] = useState(state.user.phone ?? "");
  const [dob, setDOB] = useState(state.user.dob ?? "");

  const [status, setStatus] = useState(null);

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoToChangePassword = () => {
    navigation.navigate("ChangePasswordScreen");
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const formatEmail = (email) => {
    // console.log(email);
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    return pattern.test(email);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const pattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return pattern.test(phoneNumber);
  };

  const formatDate = (date) => {
    // dd/mm/yyyy
    const pattern =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return pattern.test(date);
  };

  const handleValidate = () => {
    if (name == "" || name == null) {
      setStatus("Please enter your name");
      onToggleSnackBar();
    } else if (email == "" || email == null) {
      setStatus("Please enter your email");
      onToggleSnackBar();
    } else if (phone == "" || phone == null) {
      setStatus("Please enter your phone number");
      onToggleSnackBar();
    } else if (dob == "" || dob == null) {
      setStatus("Please enter your date of birth");
      onToggleSnackBar();
    } else if (formatEmail(email) == false) {
      setStatus("Email is not valid");
      onToggleSnackBar();
    } else if (formatPhoneNumber(phone) == false) {
      setStatus("Phone number is not valid");
      onToggleSnackBar();
    } else if (formatDate(dob) == false) {
      setStatus("Date of birth is not valid");
      onToggleSnackBar();
    }
  };

  const handleSave = () => {
    //validate
    handleValidate();
    // save to db
    // go to home
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.container}>
              <ScrollView
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerScrollView}
              >
                <View style={styles.containerImage}>
                  <Pressable onPress={pickImage} style={styles.avatarView}>
                    {image && (
                      <Image source={{ uri: image }} style={styles.avatar} />
                    )}
                  </Pressable>
                </View>
                <Text style={styles.textTitleInput}>Name</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={"Enter your name"}
                  defaultValue={name}
                  placeholderTextColor={gray2Color}
                  onChangeText={setName}
                  color={"black"}
                  cursorColor="black"
                  selectionColor="black"
                />
                <Text style={styles.textTitleInput}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={"ez@furniture.com"}
                  defaultValue={email}
                  placeholderTextColor={gray2Color}
                  onChangeText={setEmail}
                  color={"black"}
                  cursorColor="black"
                  selectionColor="black"
                />
                <Text style={styles.textTitleInput}>Phone Number</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={"+84"}
                  defaultValue={phone}
                  placeholderTextColor={gray2Color}
                  keyboardType="phone-pad"
                  cursorColor="black"
                  selectionColor="black"
                  onChangeText={setPhone}
                  color={"black"}
                />
                <Text style={styles.textTitleInput}>Date Of Birth</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue={dob}
                  placeholder={"dd/mm/yyyy"}
                  cursorColor="black"
                  selectionColor="black"
                  placeholderTextColor={gray2Color}
                  onChangeText={setDOB}
                  color={"black"}
                />
              </ScrollView>
              <View style={styles.buttonView}>
                <ButtonApp text={"Update"} onPress={handleSave} />
              </View>
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
        </TouchableWithoutFeedback>
        <View style={styles.header}>
          <Pressable onPress={handleGoBack} style={styles.headerLeft}>
            <Icon.ChevronLeft stroke="white" />
            <Text style={styles.headerLeftText}>Information</Text>
          </Pressable>
          <Pressable
            onPress={handleGoToChangePassword}
            style={styles.headerRight}
          >
            <Icon.Lock stroke="white" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
