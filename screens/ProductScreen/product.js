import React from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import ProductItem from "../../components/ProductItem";

import * as Icon from "react-native-feather";

import { styles } from "./style";
import SearchBar from "../../components/SearchBar";

const DATA = [
  {
    id: "1",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "2",
    title: "Table Green ",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "3",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "4",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "5",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "6",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
  {
    id: "7",
    title: "Table Green",
    image: require("../../assets/img/welcome_bg1.png"),
  },
];

export default function ProductScreen(props) {
  const { navigation } = props;

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <ProductItem
      onPress={handleDetailProduct}
      name={item.title}
      image={item.image}
    />
  );

  const handleDetailProduct = () => {
    navigation.navigate("DetailScreen");
  };

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
          <Text style={styles.headerLeftText}>Category</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon.ShoppingCart stroke="black" />
        </View>
      </View>

      <View style={styles.searchbar}>
        <SearchBar />
      </View>

      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
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
