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
import * as formatter from "../../global/format";

import { Snackbar } from "react-native-paper";
import * as Icon from "react-native-feather";
import { styles as mainStyle } from "../../screens/styles";
import { styles } from "./style";

import * as FileSystem from "expo-file-system";

import { gray2Color } from "../../global/colors";
import ButtonApp from "../../components/Button";
import { actions, useStore } from "../../provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InformationScreen(props) {
  const { navigation } = props;

  const [state, dispatch] = useStore();

  const [name, setName] = useState(state.user.name ?? "");
  const [phone, setPhone] = useState(
    formatter.formatPhoneNumber(state.user.phone) ?? ""
  );
  const [dob, setDOB] = useState(state.user.dob ?? "");
  const [base64, setBase64] = useState("");

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

  const [image, setImage] = useState(state.user.avatar ?? "");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // get base64
    const base64 = await FileSystem.readAsStringAsync(result.uri, {
      encoding: "base64",
    });
    setBase64(base64);
    // console.warn("base64:", base64);
    
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const formatPhoneNumber = (phoneNumber) => {
    //pattern +84xxxxxxxxx
    const pattern = /^\+84\d{9,10}$/g;
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
    } else if (phone == "" || phone == null) {
      setStatus("Please enter your phone number");
      onToggleSnackBar();
    } else if (dob == "" || dob == null) {
      setStatus("Please enter your date of birth");
      onToggleSnackBar();
    } else if (formatPhoneNumber(phone) == false) {
      setStatus("Phone number is not valid");
      onToggleSnackBar();
    } else if (formatDate(dob) == false) {
      setStatus("Date of birth is not valid");
      onToggleSnackBar();
    } else {
      return true;
    }
  };

  const handleSave = async () => {
    if (handleValidate()) {
      await fetch(
        "https://admin.furniture.bandn.online/mobile/updateInfoUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: state.user.id,
            name: name,
            phone: formatter.formatPhoneNumberDisplay(phone),
            dob: dob,
            // avatar: image,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.payload.status === true) {
            setStatus("Update successfully");
            onToggleSnackBar();
            dispatch(
              actions.updateUser({
                name: name,
                phone: formatter.formatPhoneNumberDisplay(phone),
                dob: dob,
                avatar: image,
              })
            );
          } else {
            setStatus("Update failed");
            onToggleSnackBar();
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // update user in AsyncStorage
      const data = await AsyncStorage.getItem("@data_user");
      const data_user = JSON.parse(data);
      data_user.name = name;
      data_user.phone = formatter.formatPhoneNumberDisplay(phone);
      data_user.dob = dob;
      data_user.avatar = image;
      await AsyncStorage.setItem("@data_user", JSON.stringify(data_user));
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
