import { Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

export default function ButtonApp(props) {
  const { onPress } = props;
  return (
    <Pressable onPress={onPress} style={styles.buttons}>
      <Text style={styles.textButton}>{props.text}</Text>
    </Pressable>
  );
}
