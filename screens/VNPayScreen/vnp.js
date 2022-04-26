import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import WebView from "react-native-webview";
import { ENDPOINT } from "../../socket.io-client/link";
import { io } from "socket.io-client";

export default function VNPayScreen(props) {
  const { navigation, route } = props;
  const { uri, data } = route.params;
  const [response, setResponse] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("FromAPI", async (value) => {
      console.log("FromAPI", value);
      if (value.status === true) {
        await fetch("https://admin.furniture.bandn.online/order/createOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Address: data.Address,
            phone: data.phone,
            name: data.name,
            transportation: {
              name: data.transportation.name,
              price: data.transportation.price,
            },
            price: data.price,
            voucher: data.voucher,
            isOnlinePayment: true,
            customer_id: data.customer_id,
            status: "request",
            info_payment: value.data,
            products_id: data.products_id,
            isDelete: data.isDelete,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              if (res.status === true) {
                navigation.replace("ThankYouScreen", {
                  id: ""
                });
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <WebView style={styles.webView} source={{ uri: uri }} />
      <Pressable style={styles.btnBack} onPress={handleGoBack}>
        <Icon.ChevronLeft stroke="black" />
        <Text style={styles.textBack}>Back</Text>
      </Pressable>
    </View>
  );
}
