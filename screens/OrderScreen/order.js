import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import OrderItem from "../../components/OrderItem";

import { Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

const DATA = [
  {
    id: "1",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "2",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "3",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "statusOrder",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "4",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "5",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "6",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "7",
    total: "566 000 VND",
    dateText: "17/03/2022",
    statusOrder: "Delivering",
    address: "1162 Trường sa, P. 14, Q. Phú Nhận, TP HCM",
    image: require("../../assets/img/welcome_bg1.png"),
  },
];

export default function OrderScreen(props) {
  const { navigation } = props;
  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <OrderItem
      id={item.id}
      image={item.image}
      total={item.total}
      date={item.dateText}
      statusOrder={item.statusOrder}
      address={item.address}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>My Order</Text>
        </Pressable>
      </View>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
