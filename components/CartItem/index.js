import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { formatDisplayPrice, formatNumber } from "../../global/format";
import { useStore } from "../../provider";
import QuantityButton from "../QuantityButton";
import { styles } from "./style";

export default function CartItem(props) {
  const [state, dispatch] = useStore();
  const {
    id_product,
    name,
    image,
    price,
    onPress,
    quantity,
    onDelete,
    onChangeQuantity,
    onLog,
  } = props;
  const [quantityCart, setQuantity] = useState(quantity);
  const priceFormat = formatNumber(price);
  const total = priceFormat * quantityCart;

  const handleMinus = async () => {
    if (quantityCart > 1) {
      setQuantity(quantityCart - 1);
      await fetch("https://admin.furniture.bandn.online/cart/updateCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.cart.id,
          data: {
            product_id: id_product,
            quantity: quantityCart - 1,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log("res:", res);
          if (res.cart.return === true) {
            //do something
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      onDelete(id_product);
    }
    onChangeQuantity();
  };

  const handlePlus = async () => {
    if (quantityCart < 5) {
    setQuantity(quantityCart + 1);
    await fetch("https://admin.furniture.bandn.online/cart/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: state.cart.id,
        data: {
          product_id: id_product,
          quantity: quantityCart + 1,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res:", res);
        if (res.cart.return === true) {
        }
      })
      .catch((err) => {
        console.error(err);
      });
      onChangeQuantity();
    } else {
      onLog("Quantity can not be more than 5");
    }
  };

  const handleChoose = () => {
    onPress(id_product, quantityCart);
  };

  return (
    <Pressable onPress={handleChoose} style={styles.items}>
      <Image style={styles.imageItem} source={{ uri: image }} />
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{formatDisplayPrice(total)}</Text>
        <View style={styles.quantityButton}>
          <QuantityButton
            onPressPlus={handlePlus}
            onPressMinus={handleMinus}
            quantity={quantityCart}
          />
        </View>
      </View>
    </Pressable>
  );
}
