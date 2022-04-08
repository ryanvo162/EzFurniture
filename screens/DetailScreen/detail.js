import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Image, Pressable, Text, ScrollView } from "react-native";

import { styles } from "./style";
import { styles as mainStyle } from "../../screens/styles";

import * as Icon from "react-native-feather";
import { Snackbar } from "react-native-paper";
import QuantityButton from "../../components/QuantityButton";

export default function DetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      console.log("Quantity can not be less than 0");
    }
  };

  const handlePlus = (count) => {
    setQuantity(count + 1);
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
        // console.log(res.product);
        setProduct(res.product);
      })
      .catch((err) => {
        console.log("Lỗi rồi");
        console.log(err);
      });
  }, []);
  console.log(product);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleBuyNow = () => {
    onToggleSnackBar();
  };
  const handleAddCart = () => {
    onToggleSnackBar();
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="white" />
          <Text style={styles.headerLeftText}>Back</Text>
        </Pressable>
        <Pressable onPress={handleGoBack} style={styles.headerRight}>
          <Icon.Heart stroke="white" />
          {/* <Text style={styles.headerLeftText}>Back</Text> */}
        </Pressable>
      </View>
      {product !== null && (
        <>
          <Image
            source={{uri: product.thumbnail}}
            style={styles.imageContainer}
          />
          <ScrollView
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContain}
          >
            <View style={styles.modalContainer}>
              <View style={styles.crossBar}></View>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>{product.name}</Text>
                <QuantityButton
                  quantity={quantity}
                  onPressPlus={handlePlus}
                  onPressMinus={handleMinus}
                />
              </View>

              <Text style={styles.price}>{product.price }</Text>
              <Text style={styles.descriptionTilte}>Description</Text>
              <Text style={styles.description}>
                {product.description}
              </Text>
              
            </View>
          </ScrollView>
        </>
      )}
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
        Please add quantity you want.
      </Snackbar>
    </View>
  );
}
