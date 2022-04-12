import React, { useState } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { formatDisplayPrice } from "../../global/format";

export default function ConfirmProductItem(props) {
  const { title, image, price, quantity, onPress } = props;
  const [isLoading, setIsLoading] = useState(true);
  const total = price * quantity;

  return (
    <Pressable onPress={onPress} style={styles.items}>
      <Image
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.infoProduct}>
        <View style={styles.infoNamePrice}>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.price}>{formatDisplayPrice(total)}</Text>
        </View>
        <Text style={styles.quantity}>x {quantity}</Text>
      </View>
    </Pressable>
  );
}
