import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import NotificationItem from "../../../components/NotificationItem";

import { Snackbar } from "react-native-paper";

import * as Icon from "react-native-feather";
import { styles } from "./style";
import { styles as mainStyle } from "../../../screens/styles";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna nam purus vulputate quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna nam purus vulputate quis.",
    date: "12/02/2022",
  },
  {
    id: "2",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
  {
    id: "3",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
  {
    id: "4",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
  {
    id: "5",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
  {
    id: "6",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
  {
    id: "7",
    title: "First Item",
    image: "https://picsum.photos/1000",
  },
];

export default function NotificationTab() {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleGoToDetail = () => {
    console.log("Go to detail");
  };

  const handleDelete = () => {
    onToggleSnackBar();
    DATA.splice(0, 1);
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <NotificationItem
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
          <Icon.CheckCircle stroke="black" />
          <Text style={styles.headerReadingText}>Reading</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon.Settings stroke="black" />
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
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Delete successfully
      </Snackbar>
    </View>
  );
}
