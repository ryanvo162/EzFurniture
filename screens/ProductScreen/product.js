import React from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import ProductItem from "../../components/ProductItem";

import * as Icon from "react-native-feather";

import { styles } from "./style";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "2",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "3",
    title: "First Item",
    image: require("../../assets/img/welcome_bg1.png"),
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

const Item = ({ item }) => <ProductItem name={item.title} image={item.image} />;

export default function ProductScreen(props) {
  const { navigation } = props;

  const renderItem = ({ item }) => <Item item={item} />;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable onPress={handleGoBack}>
            <Icon.ChevronLeft stroke="black" />
          </Pressable>
          <Text style={styles.headerLeftText}>Title</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon.Search style={styles.iconSearch} stroke="black" />
          <Icon.ShoppingCart stroke="black" />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 60 }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      />
    </View>
  );
}
