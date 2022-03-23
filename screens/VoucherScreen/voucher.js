import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import VoucherItem from "../../components/VoucherItem";

import { Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

const DATA = [
  {
    id: "1",
    title: "Sale 10%",
    image: require("../../assets/img/welcome_bg1.png"),
    description: "For minimum order 100k",
    date: "HSD: 31/03/2022",
  },
  {
    id: "2",
    title: "Sale 100k",
    image: require("../../assets/img/welcome_bg1.png"),
    description: "For minimum order 100k",
    date: "HSD: 31/03/2022",
  },
  {
    id: "3",
    title: "Sale 150k",
    image: require("../../assets/img/welcome_bg1.png"),
    description: "For minimum order 2000k",
    date: "HSD: 31/03/2022",
  },
  {
    id: "4",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "5",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "6",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "7",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
];

export default function VoucherScreen() {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleGoToDetail = () => {
    console.log("Go to detail");
  };

  const handleDelete = () => {
    onToggleSnackBar();
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <VoucherItem
      title={item.title}
      image={item.image}
      description={item.description}
      date={item.date}
      onPress={handleGoToDetail}
      onDelete={handleDelete}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerReadingText}>Gift Cards {"&"} Vouchers</Text>
        </View>
      </View>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          // paddingTop: 45,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Snackbar
        visible={visible}
        style={[mainStyle.snackbar]}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Save successfully
      </Snackbar>
    </View>
  );
}
