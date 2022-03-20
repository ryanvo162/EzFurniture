import React from "react";
import { View, FlatList } from "react-native";
import StyleItem from "../../../components/StyleItem";
import { styles } from "./style";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: require("../../../assets/img/bg_home1.png"),
  },
  {
    id: "2",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "3",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "4",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "5",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "6",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
  {
    id: "7",
    title: "First Item",
    image: require("../../../assets/img/welcome_bg1.png"),
  },
];

const Item = ({ item }) => (
  <StyleItem
    image={item.image}
    name={item.title}
  />
);

export default function StyleTab() {
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 45,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
