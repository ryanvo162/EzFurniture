import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";

export default function ShippingMethod() {

  return (
    <View style={styles.container}>

      <Text style={styles.textShippingMethod}>Shipping method</Text>
      <View style={styles.line2} />

      <View style={styles.statusFast}>
        <Text style={styles.textStatus}>Fast</Text>
        <View style={styles.priceFast}>
          <Text style={styles.textPrice}>$5.00</Text>
          <Icon.ChevronRight stroke="black" strokeWidth={1} width={18} height={18} />
        </View>
      </View>

      <Text style={styles.dateDelivery}>Receive goods on March 26, 2022</Text>
      <Text style={styles.voucherDelivery}>(Enter the voucher to get free shipping)</Text>

    </View>
  );
}
