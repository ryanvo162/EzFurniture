import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Modal, Alert, Pressable } from "react-native";
import ButtonApp from "../../../components/Button";
import CartItem from "../../../components/CartItem";
import { whiteColor, primaryColor } from "../../../global/colors";
import { styles } from "./style";

import { actions, useStore } from "../../../provider";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../../screens/styles";
import * as Icon from "react-native-feather";
import { formatDisplayPrice, formatNumber } from "../../../global/format";

export default function CartTab(props) {
  const [state, dispatch] = useStore();

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const [myArr, setMyArr] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(2);

  const data = myArr.length !== 0 ? [...myArr] : [];

  useEffect(async () => {
    setMyArr([]), setSubTotal(0);
    if (state.user.id) {
      await fetch("https://admin.furniture.bandn.online/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.user.id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            let arr = res.cart[0].products_id;
            arr.map((item) => {
              let quantity = item.quantity;
              fetch(
                "https://admin.furniture.bandn.online/mobile/productDetail",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: item.product_id,
                  }),
                }
              )
                .then((res) => res.json())
                .then((res) => {
                  setMyArr((myArr) => [
                    ...myArr,
                    {
                      name: res.product.name,
                      quantity: quantity,
                      image: res.product.thumbnail,
                      price: formatNumber(res.product.price),
                      id: res.product._id,
                    },
                  ]);
                  setSubTotal(
                    (subTotal) => subTotal + formatNumber(res.product.price) * quantity
                  );
                })
                .catch((err) => {
                  setStatus("Can not get product detail");
                  onToggleSnackBar();
                  console.log(err);
                });
            });
          } else {
            setStatus("Loading...");
            onToggleSnackBar();
          }
        })
        .catch((err) => {
          setStatus("Check server and try again");
          onToggleSnackBar();
          console.error(err);
        });
    }
  }, [state.user.id]);

  const fetchData = async () => {
    setMyArr([]), setSubTotal(0);
    await fetch("https://admin.furniture.bandn.online/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: state.user.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          let arr = res.cart[0].products_id;
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
                    price: formatNumber(res.product.price),
                    id: res.product._id,
                  },
                ]);
                setSubTotal(
                  (subTotal) => subTotal + formatNumber(res.product.price) * quantity
                );
              })
              .catch((err) => {
                setStatus("Can not get product detail");
                onToggleSnackBar();
                console.log(err);
              });
          });
        } else {
          setStatus("Loading...");
          onToggleSnackBar();
        }
      })
      .catch((err) => {
        setStatus("Check server and try again");
        onToggleSnackBar();
        console.error(err);
      });
  };

  // console.log("myArr:", myArr);

  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => <Item item={item} />;

  const handleSeeDetail = (id_product, quantity) => {
    console.log(id_product, quantity);
    navigation.navigate("DetailScreen", {
      id: id_product,
      quantityProduct: quantity,
    });
  };

  const handleDelete = (id) => {
    //delete item by id
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            fetch("https://admin.furniture.bandn.online/cart/delete", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: state.cart.id,
                productId: id,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                if (res.cart.payload.status === true) {
                  setStatus("Delete success");
                  onToggleSnackBar();
                  setMyArr([]);
                  fetchData();
                } else {
                  setStatus("Delete fail");
                  onToggleSnackBar();
                }
              })
              .catch((err) => {
                setStatus("Check server and try again");
                onToggleSnackBar();
                console.error(err);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handlePay = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(!modalVisible);
    navigation.navigate("ConfirmOrderScreen",{data:myArr,subTotal:subTotal,isDelete:true});
  };

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const Item = ({ item }) => (
    <CartItem
      id_product={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      onChangeQuantity={fetchData}
      onPress={handleSeeDetail}
      onDelete={handleDelete}
    />
  );

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.flatList
          }
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.textEmptyCart}>Your cart is empty</Text>
        </View>
      )}
      {data.length !== 0 ? (
        <View style={styles.btnPayment}>
          <ButtonApp
            text={"Get it " + "(" + formatDisplayPrice(subTotal) + ")"}
            onPress={handlePay}
          />
        </View>
      ) : null}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.containerSubTotal}>
              <Text style={styles.titleTotal}>Subtotal:</Text>
              <Text style={styles.priceTotal}>
                {formatDisplayPrice(subTotal)}
              </Text>
            </View>

            <View style={styles.containerSubTotal}>
              <Text style={styles.titleTotal}>Shipping Fee:</Text>
              <Text style={styles.priceTotal}>
                {formatDisplayPrice(shippingFee)}
              </Text>
            </View>

            <View style={styles.line} />

            <View style={[styles.containerSubTotal, styles.containerTotal]}>
              <Text style={styles.titleTotal}>Total:</Text>
              <Text style={styles.priceTotal}>
                {formatDisplayPrice(shippingFee + subTotal)}
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <ButtonApp
                text={"Confirm"}
                onPress={handleConfirm}
                color={whiteColor}
                textColor={primaryColor}
              />
            </View>
          </View>
          <Pressable style={styles.closeContainer} onPress={handleCancel}>
            <Icon.X color={whiteColor} />
          </Pressable>
        </View>
      </Modal>
      <Snackbar
        visible={visible}
        duration={1500}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
      >
        {status}
      </Snackbar>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.title}>My Cart</Text>
        </View>
      </View>
    </View>
  );
}
