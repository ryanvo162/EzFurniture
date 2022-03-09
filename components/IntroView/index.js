import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

export default function IntroView() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modern Furniture</Text>
      
      <Text style={styles.introText}>
        Contrary to popular belief, Lorem Ipsum is not simply  random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock.
      </Text>

      <Pressable style={styles.btnNext} >
        <Text style={styles.btnText} >Next</Text>
      </Pressable>

    </View>
  );
}
