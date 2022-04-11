import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Modal, Alert } from "react-native";
import ButtonApp from "../../../components/Button";
import CartItem from "../../../components/CartItem";
import { whiteColor, primaryColor } from "../../../global/colors";
import { styles } from "./style";

import { actions, useStore } from "../../../provider";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../../screens/styles";

const DATA = [
  {
    id: "1",
    id_product: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "2",
    id_product: "1",
    name: "Product 2",
    image: require("../../../assets/img/bg_home1.png"),
    price: 100000,
    quantity: 2,
  },
  {
    id: "3",
    id_product: "1",
    name: "Product 3",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "4",
    id_product: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "5",
    id_product: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "6",
    id_product: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
];

export default function CartTab(props) {
  const [state, dispatch] = useStore();
  if (state) {
    const { cart } = state;
    console.log("cart", cart);
  }

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(async () => {
    const check = await fetch(
      "https://admin.furniture.bandn.online/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: state.cart.id,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        setStatus("Check server and try again");
        onToggleSnackBar();
        console.log(err);
      });
  }, []);

  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => <Item item={item} />;

  const handleSeeDetail = (id_product, quantity) => {
    // console.log(id_product,quantity);
    navigation.navigate("DetailScreen", {
      id: id_product,
      quantityProduct: quantity,
    });
  };

  const handleChangeQuantity = (quantity, total) => {
    console.log(quantity, total);
  };

  const handlePaymentConfirm = () => {
    setModalVisible(true);
  };
  const handleCheck = () => {
    setModalVisible(!modalVisible);
  };

  const Item = ({ item }) => (
    <CartItem
      id_product={item.id_product}
      name={item.name}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      onPress={handleSeeDetail}
      onChange={handleChangeQuantity}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.title}>My Cart</Text>
        </View>
      </View>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
          paddingTop: 12,
        }}
        style={styles.flatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.btnPayment}>
        <ButtonApp text={"Payment"} onPress={handlePaymentConfirm} />
      </View>

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
              <Text style={styles.priceTotal}>$78.00</Text>
            </View>

            <View style={styles.containerSubTotal}>
              <Text style={styles.titleTotal}>Shipping Cost:</Text>
              <Text style={styles.priceTotal}>$27</Text>
            </View>

            <View style={styles.line} />

            <View style={[styles.containerSubTotal, styles.containerTotal]}>
              <Text style={styles.titleTotal}>Total:</Text>
              <Text style={styles.priceTotal}>$98.00</Text>
            </View>

            <ButtonApp
              text={"Confirm"}
              onPress={handleCheck}
              color={whiteColor}
              textColor={primaryColor}
            />
          </View>
        </View>
      </Modal>
      <Snackbar
        visible={visible}
        duration={1500}
        style={[mainStyle.snackbar, styles.snackbar]}
        onDismiss={onDismissSnackBar}
        // action={{
        //   label: "Hide",
        //   onPress: () => {

        //   },
        // }}
      >
        {status}
      </Snackbar>
    </View>
  );
}
