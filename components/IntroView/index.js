import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

import * as Icon from "react-native-feather";

export default function IntroView(props) {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modern Furniture</Text>

      <Text style={styles.introText}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock.
      </Text>

      <View style={styles.btnNext}>
        <Pressable onPress={onPress} style={styles.btn}>
          <Icon.ChevronRight stroke="white" />
        </Pressable>
      </View>
    </View>
  );
}
