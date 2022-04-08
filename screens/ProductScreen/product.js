import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import ProductItem from "../../components/ProductItem";

import * as Icon from "react-native-feather";

import { styles } from "./style";
import SearchBar from "../../components/SearchBar";

export default function ProductScreen(props) {
  const { navigation, route } = props;
  const { _id_category, _id_style, title } = route.params;

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <ProductItem
      onPress={handleDetailProduct}
      name={item.name}
      image={item.thumbnail}
      price={item.price}
      id={item._id}
    />
  );
  const [myArr, setMyArr] = useState([]);

  const DATA = myArr.length !== 0 ? [...myArr] : [];
  if (DATA.length !== 0) {
    console.log("DATA[0].name:", DATA[0].id);
  }
  console.log("DATA:", DATA);

  if (_id_category !== undefined) {
    useEffect(async () => {
      const check = await fetch(
        "https://admin.furniture.bandn.online/product/getProductOnCategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoryId: _id_category,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.payload.data);
          setMyArr(res.payload.data);
        })
        .catch((err) => {
          console.log("Lỗi rồi");
          console.log(err);
        });
    }, []);
  } else if (_id_style !== undefined) {
    useEffect(async () => {
      const check = await fetch(
        "https://admin.furniture.bandn.online/product/getProductOnStyles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            styleID: _id_style,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.payload.data);
          setMyArr(res.payload.data);
        })
        .catch((err) => {
          console.log("Lỗi rồi");
          console.log(err);
        });
    }, []);
  }

  console.log("myArr:", myArr);

  const handleDetailProduct = (id) => {
    navigation.navigate("DetailScreen", { id });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToCart = () => {
    navigation.navigate("HomeScreen", { screen: "Cart" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>{title}</Text>
        </Pressable>
        <View style={styles.headerRight}>
          <Pressable onPress={handleGoToCart}>
            <Icon.ShoppingCart stroke="black" />
          </Pressable>
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
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      />
    </View>
  );
}
