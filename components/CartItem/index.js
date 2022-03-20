import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import QuantityButton from "../QuantityButton";
import { styles } from "./style";

export default function CartItem(props) {
  const { name, image, price, onChange } = props;
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

  useEffect(async() => {await onChange(quantity, total), []});


  return (
    <View style={styles.items}>
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
    </View>
  );
}
