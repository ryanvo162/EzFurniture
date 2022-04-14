import React from "react";
import { Pressable,View, Text, Image } from "react-native";
import { styles } from "./style";

export default function CategoryItem(props) {
  const { id,category, onPress, color, top, right, left, bottom } = props;

  const handleChoose = () => {
    onPress(id);
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
      <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/img/polygon_home.png")}
      />
      <Text
        style={{
          position: "absolute",
          color: color,
          fontSize: 14,
          textAlign: "center",
    
        }}
      >
        {category}
      </Text>
      </View>
    </Pressable>
  );
}
