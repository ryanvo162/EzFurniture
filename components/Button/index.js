import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

export default function ButtonApp(props) {
  return (
    <View>
      <Pressable style={styles.buttons}>
        <Text style={styles.textButton}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
