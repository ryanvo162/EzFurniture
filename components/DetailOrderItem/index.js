import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { styles } from "./style";

export default function DetailOrderItem(props) {
  const { name, price, id, quantity, image } = props;
  return (
    <Pressable style={styles.item}>

      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Name:</Text>
        <Text style={styles.valueText}>{name}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>ID:</Text>
        <Text style={styles.valueText}>{id}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Quantity:</Text>
        <Text style={styles.valueText}>{quantity}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Price:</Text>
        <Text style={styles.valueText}>{price}</Text>
      </View>

      <View style={styles.line} />

    </Pressable>
  );
}
