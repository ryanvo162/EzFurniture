import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

export default function CartItem(props) {
  return (
    <View style={styles.items}>
      <Image
        style={styles.imageItem}
        resizeMode="cover"
        source={props.source}
      />
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{props.name}Products</Text>
      </View>
    </View>
  );
}
