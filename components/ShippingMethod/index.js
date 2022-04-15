import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { capitalizeFirstLetter, formatDisplayPrice } from "../../global/format";

export default function ShippingMethod(props) {
  const { method, price, time, onPress } = props;
  const handlePress = () => {
    onPress(method, price, time);
  };
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.textShippingMethod}>Shipping method</Text>
      <View style={styles.line2} />

      <View style={styles.statusFast}>
        <Text style={styles.textStatus}>{capitalizeFirstLetter(method)}</Text>
        <View style={styles.price}>
          <Text style={styles.textPrice}>{formatDisplayPrice(price)}</Text>
          <Icon.ChevronRight
            stroke="black"
            strokeWidth={1}
            width={18}
            height={18}
          />
        </View>
      </View>

      <Text style={styles.dateDelivery}>Estimated delivery in {time}</Text>
      <Text style={styles.voucherDelivery}>
        (Enter to choose a different shipping method)
      </Text>
    </Pressable>
  );
}
