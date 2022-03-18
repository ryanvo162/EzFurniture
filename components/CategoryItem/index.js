import React from "react";
import { Pressable, Text, Image } from "react-native";
import { styles } from "./style";

export default function CategoryItem(props) {
  const { category, onPress, color, top, right, left, bottom } = props;
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,

        // borderRadius: 50,
        // backgroundColor: "rgba(119,120,123,0.7)",
      }}
    >
      <Image style={styles.image} source={require("../../assets/img/typehome.png")} />
      <Text
        style={{
          position: "absolute",
          bottom: 24,
          left: 12,
          // backgroundColor:"red",
          color: color,
          fontSize: 14,
        }}
      >
        {category}
      </Text>
    </Pressable>
  );
}
