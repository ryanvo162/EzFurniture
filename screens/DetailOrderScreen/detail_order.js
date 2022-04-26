import React, { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DetailOrderItem from "../../components/DetailOrderItem";
import {
  capitalizeFirstLetter,
  formatDisplayPrice,
  formatJustDate,
  formatNumber,
  formatPhoneNumberDisplay2,
} from "../../global/format";

export default function DetailOrderScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToDetail = (id) => {
    navigation.navigate("DetailScreen", { id });
  };

  const [myArr, setMyArr] = useState([]);
  const data = myArr.length !== 0 ? [...myArr] : [];

  const [idOrder, setIdOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const [statusOrder, setStatusOrder] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [shippingMethod, setShippingMethod] = useState(null);

  useEffect(async () => {
    setMyArr([]);
    await fetch("http://admin.furniture.bandn.online/order/getDetailOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.order);
        if (responseJson.order) {
          setIdOrder(responseJson.order._id);
          setTotal(formatDisplayPrice(responseJson.order.price));
          setOrderDate(formatJustDate(responseJson.order.date));
          setStatusOrder(capitalizeFirstLetter(responseJson.order.status));
          setName(responseJson.order.name);
          setPhone(formatPhoneNumberDisplay2(responseJson.order.phone));
          setAddress(responseJson.order.Address);
          if (responseJson.order.isOnlinePayment === true) {
            setPaymentMethod("Online");
          } else {
            setPaymentMethod("Offline");
          }
          setShippingMethod(
            capitalizeFirstLetter(responseJson.order.transportation.name)
          );
          let arr = responseJson.order.products_id;
          arr.map((item) => {
            let quantity = item.quantity;
            fetch("https://admin.furniture.bandn.online/mobile/productDetail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: item.product_id,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                setMyArr((myArr) => [
                  ...myArr,
                  {
                    name: res.product.name,
                    quantity: quantity,
                    image: res.product.thumbnail,
                    price: formatNumber(res.product.price * quantity),
                    id: res.product._id,
                  },
                ]);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
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
      image={item.image}
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
              <Text style={styles.infoOrderText}>
                <Text style={styles.titleInfo}>ID: </Text> {idOrder}
              </Text>
              <Text style={styles.infoOrderText}>
                <Text style={styles.titleInfo}>Total: </Text>
                {total}
              </Text>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Order Date: </Text>
                  {orderDate}
                </Text>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Shipping method: </Text>
                  {shippingMethod}
                </Text>
              </View>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Status: </Text> {statusOrder}
                </Text>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Payment method: </Text>
                  {paymentMethod}
                </Text>
              </View>
              <View style={styles.infoTextInline}>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Name: </Text> {name}
                </Text>
                <Text style={styles.infoOrderText}>
                  <Text style={styles.titleInfo}>Phone: </Text> {phone}
                </Text>
              </View>

              <Text style={styles.infoOrderText}>
                <Text style={styles.titleInfo}>Address: </Text> {address}
              </Text>
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
