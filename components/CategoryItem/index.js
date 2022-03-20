import React from "react";
import { Pressable, Text, Image } from "react-native";
import { styles } from "./style";

export default function CategoryItem(props) {
  const { category, onPress, color, top, right, left, bottom } = props;

  const handleChoose = () => {
    onPress(category);
  };
  
  return (
    <Pressable
      onPress={handleChoose}
      style={{
        position: "absolute",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      <Image
        style={styles.image}
        source={require("../../assets/img/typehome.png")}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 24,
          left: 12,
          color: color,
          fontSize: 14,
        }}
      >
        {category}
      </Text>
    </Pressable>
  );
}
