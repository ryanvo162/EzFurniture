import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable, TextInput } from "react-native";

import { Button, Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";

import { gray2Color } from "../../global/colors";
import ButtonApp from "../../components/Button";

export default function InformationScreen(props) {
  const { navigation } = props;

  const [username, setUsername] = useState('username');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {

  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="white" />
          <Text style={styles.headerLeftText}>Information</Text>
        </Pressable>

      </View>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerScrollView}>
        <View style={styles.containerImage}>
          <Image
            source={require("../../assets/img/bg_home1.png")}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.textTitleInput}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Username'}
          // defaultValue={username}
          placeholderTextColor={gray2Color}
          onChangeText={setUsername}
          color={"black"}
        />
        <Text style={styles.textTitleInput}>Email </Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          placeholderTextColor={gray2Color}
          onChangeText={setEmail}
          color={"black"}
        />
        <Text style={styles.textTitleInput}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Phone Number'}
          placeholderTextColor={gray2Color}
          onChangeText={setPhone}
          color={"black"}
        />
        <Text style={styles.textTitleInput}>Date Of Birth</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Date Of Birth'}
          placeholderTextColor={gray2Color}
          onChangeText={setDOB}
          color={"black"}
        />
        
      </ScrollView>
      <View style={styles.buttonView}>
        <ButtonApp text={"Update"} onPress={handleSave} />
      </View>

    </View>

  );
}
