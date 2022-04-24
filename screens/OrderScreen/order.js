import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import OrderItem from "../../components/OrderItem";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../styles";

import * as Icon from "react-native-feather";
import { styles } from "./style";

import { useStore } from "../../provider";
import {
  capitalizeFirstLetter,
  formatDate,
  formatDateToDate,
  formatDisplayPrice,
  formatJustDate,
} from "../../global/format";

export default function OrderScreen(props) {
  const { navigation } = props;
  const [state, dispatch] = useStore();

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const [myArr, setMyArr] = useState([]);
  const data = myArr.length !== 0 ? [...myArr] : [];

  const renderItem = ({ item }) => <Item item={item} />;

  useEffect(async () => {
    const check = await fetch(
      "https://admin.furniture.bandn.online/order/getOrderById",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.user.id,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setMyArr(res.order);
      })
      .catch((err) => {
        setStatus("Check server and try again");
        onToggleSnackBar();
        console.log(err);
      });
  }, []);

  const handleGoToDetail = (id) => {
    navigation.navigate("DetailOrderScreen", { id });
  };

  const Item = ({ item }) => (
    <OrderItem
      id={item._id}
      image={item.image}
      total={formatDisplayPrice(item.price)}
      date={formatDate(item.date)}
      statusOrder={capitalizeFirstLetter(item.status)}
      onPress={handleGoToDetail}
      address={item.Address}
      isOnline={item.isOnlinePayment}
    />
  );

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 60,
            paddingTop: 100,
          }}
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View style={styles.empty}>
          <Image
            style={styles.emptyImage}
            source={require("../../assets/img/emptyOrder.png")}
          />
          <Text style={styles.emptyText}>You don't have any order</Text>
        </View>
      )}
      <Snackbar
        visible={visible}
        duration={1500}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
      >
        {status}
      </Snackbar>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>My Order</Text>
        </Pressable>
      </View>
    </View>
  );
}
