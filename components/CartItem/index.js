import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./style";

export default function CartItem(props) {
  const { name, source, price, onPress } = props;

  const [quantity, setQuantity] = useState(0);

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      console.log("Quantity can not be less than 0");
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.items}>
      <Image style={styles.imageItem} source={source} />
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{name}Products</Text>
        <Text style={styles.price}>{price}123.123</Text>
        <View style={styles.quantity}>
          <Pressable onPress={handleMinus} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </Pressable>
          <Text style={styles.quantityNumber}>{quantity}</Text>
          <Pressable onPress={handlePlus} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
