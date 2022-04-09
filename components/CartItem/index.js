import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import QuantityButton from "../QuantityButton";
import { styles } from "./style";

export default function CartItem(props) {
  const { id_product,name, image, price, onChange, onPress } = props;
  const [quantity, setQuantity] = useState(0);
  const total = price * quantity;
  
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      console.log("Quantity can not be less than 0");
    }
  };

  const handlePlus = (count) => {
    setQuantity(count + 1);
  };

  const handleChoose = () => {
    onPress(id_product,quantity);
  }

  useEffect(async() => {await onChange(quantity, total), []});

  return (
    <Pressable onPress={handleChoose} style={styles.items}>
      <Image style={styles.imageItem} source={image} />
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{total}</Text>
        <QuantityButton
          // onPress={handleChange}
          onPressPlus={handlePlus}
          onPressMinus={handleMinus}
          quantity={quantity}
        />
      </View>
    </Pressable>
  );
}
