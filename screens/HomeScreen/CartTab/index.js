import React from "react";
import { View, Text, ScrollView } from "react-native";
import CartItem from "../../../components/CartItem";
import { styles } from "./style";

export default function CartTab() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 45,
          paddingBottom: 100,
        }}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </View>
  );
}
