import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import ProductItem from "../../components/ProductItem";

import * as Icon from "react-native-feather";

import { styles } from "./style";
import SearchBar from "../../components/SearchBar";

export default function ProductScreen(props) {
  const { navigation, route } = props;
  const { _id_category, _id_style, title } = route.params;
  const [search, setSearch] = useState("");
  // console.log(route.params);

  const handleSearch = async () => {
    if (search.length !== 0) {
      await fetch("https://admin.furniture.bandn.online/mobile/product")
        .then((res) => res.json())
        .then((res) => {
          //search
          const newArr = res.product.filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
          setMyArrSearch(newArr);
        })
        .catch((err) => console.log(err));
    }
  };

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
  const data = myArr.length !== 0 ? [...myArr] : [];
  console.log(data);

  const [myArrSearch, setMyArrSearch] = useState([]);

  const dataSearch = myArrSearch.length !== 0 ? [...myArrSearch] : [];

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
          // console.log(res.payload.data);
          setMyArr(res.payload.data);
        })
        .catch((err) => {
          console.log("Lỗi rồi");
          console.log(err);
        });
    }, []);
  }

  const handleDetailProduct = (id) => {
    navigation.navigate("DetailScreen", { id });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToCart = () => {
    navigation.replace("HomeScreen", { screen: "Cart" });
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
        <SearchBar onChangeText={setSearch} onSearch={handleSearch} />
      </View>
      {data.length !== 0 || dataSearch.length !== 0 ? (
        search === "" ? (
          <FlatList
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 60 }}
            style={styles.flatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
            columnWrapperStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
          />
        ) : dataSearch.length !== 0 ? (
          <FlatList
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 60 }}
            style={styles.flatList}
            data={dataSearch}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
            columnWrapperStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
          />
        ) : (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>We don't any items</Text>
          </View>
        )
      ) : (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>We don't any items</Text>
        </View>
      )}
    </View>
  );
}
