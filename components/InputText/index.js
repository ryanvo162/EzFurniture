import { View, TextInput } from "react-native";
import React from "react";

import { styles } from "./style";

export default function TextInputApp(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={"#ffffff"}
        value={props.value}
        color={"#ffffff"}
      />
    </View>
  );
}
