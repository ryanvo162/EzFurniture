import { View, Text, Pressable } from "react-native";
import React from "react";

import { styles } from "./style";

import * as Icon from "react-native-feather";

export default function IntroView(props) {
  const { onPress } = props;
  return (
    <View style={styles.container}>

      <Text style={styles.introText}>
        We are EzFurniture, a small business that specializes in furniture,
        lighting, and home decoration items. We believe passionately in great
        bargains and excellent service, which is why we commit ourselves to
        giving you the best of both.
      </Text>

    </View>
  );
}
