import React from 'react'
import { View, Text, Image } from "react-native";
import { styles } from "./style";

export default function StyleItem(props) {
  return (
    <View style={styles.items}>
    <Image
      style={styles.imageItem}
      resizeMode="cover"
      source={props.source}
    />
    <View style={styles.textStyleView}>
      <Text style={styles.textStyle}> {props.name} </Text>
    </View>
  </View>
  )
}
