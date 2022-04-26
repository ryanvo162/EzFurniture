import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import VoucherItem from "../../components/VoucherItem";

import { Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";

const DATA = [
  {
    id: "1",
    title: "Sale 10%",
    image: "https://picsum.photos/1000?random=1",
    description: "For minimum order 100k",
    date: "HSD: 31/03/2022",
  },
  {
    id: "2",
    title: "Sale 100k",
    image: "https://picsum.photos/1000?random=2",
    description: "For minimum order 100k",
    date: "HSD: 31/03/2022",
  },
  {
    id: "3",
    title: "Sale 150k",
    image: "https://picsum.photos/1000?random=3",
    description: "For minimum order 2000k",
    date: "HSD: 31/03/2022",
  },
];

export default function VoucherScreen(props) {
  const { navigation } = props;
  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <VoucherItem
      title={item.title}
      image={item.image}
      description={item.description}
      date={item.date}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>Gift {"&"} vouchers</Text>
        </Pressable>
      </View>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
