import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DetailOrderItem from "../../components/DetailOrderItem";
import {
  blackColor,
  whiteColor,
  primaryColor,
  gray2Color,
} from "../../global/colors";
const data = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    price: "1.000.000",
    quantity: "1",
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    price: "1.000.000",
    quantity: "1",
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    price: "1.000.000",
    quantity: "1",
    image: 'https://picsum.photos/200/300',
  },
];

export default function DetailOrderScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToDetail = () => {
    navigation.navigate("DetailScreen");
  };

  const [myArr, setMyArr] = useState([]);
  const data = myArr.length !== 0 ? [...myArr] : [];
  const [myObj, setMyObj] = useState({});

  useEffect(async () => {
    await fetch("http://admin.furniture.bandn.online/order/getDetailOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Item = ({ item }) => (
    <DetailOrderItem
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      onPress={handleGoToDetail}
    />
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.infoOrder}>
              <Text style={styles.titleOrder}>Order Information</Text>
              <Text style={styles.infoOrderText}>ID:</Text>
              <Text style={styles.infoOrderText}>Total:</Text>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>Order Date:</Text>
                <Text style={styles.infoOrderText}>Shipping method:</Text>
              </View>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>Status:</Text>
                <Text style={styles.infoOrderText}>Payment method:</Text>
              </View>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>Name:</Text>
                <Text style={styles.infoOrderText}>Phone:</Text>
              </View>
              <Text style={styles.infoOrderText}>Address:</Text>
            </View>
          </>
        }
        contentContainerStyle={styles.scrollView}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>Detail</Text>
        </Pressable>
      </View>
    </View>
  );
}
