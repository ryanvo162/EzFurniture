import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

import * as Icon from "react-native-feather";
import { Snackbar } from "react-native-paper";
import QuantityButton from "../../components/QuantityButton";
import { useStore } from "../../provider";
import { formatDisplayPrice, formatNumber } from "../../global/format";

export default function DetailScreen(props) {
  const { navigation, route } = props;
  const [state, dispatch] = useStore();
  let id, quantityProduct;
  if (route.params) {
    id = route.params.id;
    quantityProduct = route.params.quantityProduct;
  }
  // console.log("id:", id);
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(quantityProduct ?? 1);
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setStatus("Quantity can not be less than 1");
      onToggleSnackBar();
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  useEffect(async () => {
    const check = await fetch(
      "https://admin.furniture.bandn.online/mobile/productDetail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.product);
      })
      .catch((err) => {
        setStatus("Can not get product detail");
        onToggleSnackBar();
        console.log(err);
      });
  }, []);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleBuyNow = () => {
    navigation.navigate("ConfirmOrderScreen", {
      data: [
        {
          id: id,
          name: product.name,
          price: formatNumber(product.price),
          image: product.thumbnail,
          quantity: quantity,
        },
      ],
      subTotal: formatNumber(product.price) * quantity,
      isDelete: false,
    });
    console.log("Change screen");
  };

  const handleAddCart = async () => {
    await fetch("https://admin.furniture.bandn.online/cart/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: state.cart.id,
        data: {
          product_id: id,
          quantity: quantity,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        if (res.cart.return === true) {
          setStatus("Add to cart success");
          onToggleSnackBar();
          navigation.replace("HomeScreen", { screen: "Cart" });
        }
      })
      .catch((err) => {
        setStatus("Check server and try again");
        onToggleSnackBar();
        console.error(err);
      });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>Back</Text>
        </Pressable>
        <Pressable onPress={handleGoBack} style={styles.headerRight}>
          <Icon.Heart stroke="black" />
        </Pressable>
      </View>

      {(product !== null && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator color="white" />
            </View>
          )}
        </View>
      )) || (
        <View
          style={{
            width: "100%",
            height: "50%",
            position: "absolute",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={{
              uri: "https://cdn.dribbble.com/users/1011039/screenshots/7187121/media/4da7811f4d21bfd0e1a0abb4b2d0b646.gif",
            }}
            style={{ width: "30%", height: "30%" }}
          />
          {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator color="gray" />
            </View>
          )}
        </View>
      )}
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContain}
      >
        {(product !== null && (
          <View style={styles.modalContainer}>
            <View style={styles.crossBar}></View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{product.name}</Text>
              <View style={styles.quantity}>
                <QuantityButton
                  quantity={quantity}
                  onPressPlus={handlePlus}
                  onPressMinus={handleMinus}
                />
              </View>
            </View>

            <Text style={styles.price}>
              {formatDisplayPrice(product.price)}
            </Text>
            <Text style={styles.descriptionTilte}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        )) || (
          <View style={styles.modalContainer}>
            <View style={styles.crossBar}></View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Loading...</Text>
              <QuantityButton
                quantity={quantity}
                onPressPlus={handlePlus}
                onPressMinus={handleMinus}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.bottomButtons}>
        <Pressable onPress={handleAddCart} style={styles.buttonCart}>
          <Icon.ShoppingCart stroke="white" />
        </Pressable>

        <Pressable onPress={handleBuyNow} style={styles.buttonBuy}>
          <Icon.ShoppingBag stroke="white" />
          <Text style={styles.textButton}>Buy Now</Text>
        </Pressable>
      </View>

      <Snackbar
        visible={visible}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        duration={2000}
        // action={{
        //   label: "Undo",
        //   onPress: () => {
        //     // Do something
        //   },
        // }}
      >
        {status}
      </Snackbar>
    </View>
  );
}
