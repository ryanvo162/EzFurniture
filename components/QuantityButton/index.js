import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";

export default function QuantityButton(props) {
  const { quantity, onPressPlus, onPressMinus, onPress } = props;

  const handleMinus = () => {
    onPressMinus(quantity);
  };

  const handlePlus = () => {
    onPressPlus(quantity);
  };

  return (
    <Pressable style={styles.quantity}>
      <Pressable onPress={handleMinus} style={styles.quantityButton}>
        <Text style={styles.quantityText}>-</Text>
      </Pressable>
      <Text style={styles.quantityNumber}>{quantity}</Text>
      <Pressable onPress={handlePlus} style={styles.quantityButton}>
        <Text style={styles.quantityText}>+</Text>
      </Pressable>
    </Pressable>
  );
}
