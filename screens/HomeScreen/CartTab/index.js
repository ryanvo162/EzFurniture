import React, { useState } from "react";
import { View, Text, FlatList, Modal, Alert } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ButtonApp from "../../../components/Button";
import CartItem from "../../../components/CartItem";
import { whiteColor, primaryColor } from "../../../global/colors";
import { styles } from "./style";

const DATA = [
  {
    id: "1",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "2",
    name: "Product 2",
    image: require("../../../assets/img/bg_home1.png"),
    price: 100000,
    quantity: 2,
  },
  {
    id: "3",
    name: "Product 3",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "4",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "5",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
  {
    id: "6",
    name: "Product 1",
    image: require("../../../assets/img/bg_home1.png"),
    price: 123123,
    quantity: 1,
  },
];

export default function CartTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => <Item item={item} />;

  const handleChangeQuantity = (quantity, total) => {
    // console.log(quantity,total)
  }

  const handlePaymentConfirm = () => {
    setModalVisible(true)
  }
  const handleCheck = () => { setModalVisible(!modalVisible) }


  const Item = ({ item }) => (
    <CartItem
      name={item.name}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
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
        <ButtonApp text={'Payment'} onPress={handlePaymentConfirm} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
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


            <View style={[styles.containerSubTotal,styles.containerTotal]}>
              <Text style={styles.titleTotal}>Total:</Text>
              <Text style={styles.priceTotal}>$98.00</Text>
            </View>

            <ButtonApp text={'Confirm'} onPress={handleCheck} color={whiteColor} textColor={primaryColor} />

          </View>
        </View>
      </Modal>

    </View>
  );
}
