import React from "react";
import { View, Text, FlatList } from "react-native";
import CartItem from "../../../components/CartItem";
import { styles } from "./style";

const DATA = [
  {
    id: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
  {
    id: "2",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
  {
    id: "3",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
  {
    id: "4",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
  {
    id: "5",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
  {
    id: "6",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 0,
  },
];

export default function CartTab() {
  const renderItem = ({ item }) => <Item item={item} />;

  const handleChangeQuantity = (quantity,total) => { 
    // console.log(quantity,total)
  }

  const Item = ({ item }) => (
    <CartItem
      name={item.name}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      onChange={handleChangeQuantity}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 100,
          }}
          style={styles.flatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.title}>My Cart</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
