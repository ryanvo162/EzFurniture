import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { formatDisplayPrice } from "../../global/format";
import { styles } from "./style";

export default function DetailOrderItem(props) {
  const { name, price, id, quantity, image, onPress } = props;
  const handleChoose = () => {
    onPress(id);
  };
  return (
    <Pressable onPress={handleChoose} style={styles.item}>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Name:</Text>
        <Text style={styles.valueText} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
{/* 
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>ID:</Text>
        <Text style={styles.valueText}>{id}</Text>
      </View> */}

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Quantity:</Text>
        <Text style={styles.valueText}>x {quantity}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Price:</Text>
        <Text style={styles.valueText}>{formatDisplayPrice(price)}</Text>
      </View>

      <View style={styles.line} />
    </Pressable>
  );
}
