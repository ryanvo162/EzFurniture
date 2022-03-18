import React from "react";
import { View, Text, ScrollView } from "react-native";
import CartItem from "../../../components/CartItem";
import { styles } from "./style";

export default function CartTab() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingTop: 100,
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
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.title}>My Cart</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
