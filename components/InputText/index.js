import { View, TextInput } from "react-native";
import React from "react";

import { styles } from "./style";

export default function TextInputApp(props) {
  const { onChange, placeholder, type, autoComplete, secureTextEntry, defaultValue } = props;
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={"#ffffff"}
        onChangeText={onChange}
        color={"#ffffff"}
        keyboardType={type}
        autoComplete={autoComplete}
        selectionColor="white"
      />
    </View>
  );
}
