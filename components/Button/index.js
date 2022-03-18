import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

export default function ButtonApp(props) {
  const { onPress } = props;
  return (
    <View>
      <Pressable onPress={onPress} style={styles.buttons}>
        <Text style={styles.textButton}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
