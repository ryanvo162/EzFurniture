import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  FlatList,
} from "react-native";
import { styles } from "./style";
import { RadioButton } from "react-native-paper";
import * as Icon from "react-native-feather";
import ConfirmProductItem from "../../components/ConfirmProductItem";
import ShippingMethod from "../../components/ShippingMethod";
import ButtonApp from "../../components/Button";
import {
  primaryColor,
  gray2Color,
  gray3Color,
  gray1Color,
  blackColor,
  whiteColor,
} from "../../global/colors";

const data = [
  {
    id: 1,
    title: "Product 1",
    image: "https://picsum.photos/500",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://picsum.photos/500",
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://picsum.photos/500",
    price: 300,
    quantity: 1,
  },
];

export default function ConfirmOrderScreen(props) {
  const { navigation, route } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const handleDeliveryAddress = () => {
    console.log("handleDeliveryAddress");
    setModalVisible(!modalVisible);
  };

  const handleCheck = () => {
    setModalVisible(!modalVisible);
  };
  const handleGoToProduct = () => {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const Item = ({ item }) => (
    <ConfirmProductItem
      id={item._id}
      title={item.title}
      image={item.image}
      price={item.price}
      quantity={item.quantity}
      onPress={handleGoToProduct}
    />
  );
  const renderItem = ({ item }) => <Item item={item} />;

  const [value, setValue] = useState("cash");
  //info location
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.line1} />

            <Pressable
              onPress={handleDeliveryAddress}
              style={styles.chooseLocation}
            >
              <View style={styles.location}>
                <Icon.MapPin stroke="#DDAC8B" />
                <View style={styles.titleLocation}>
                  <Text style={styles.textDelivery}>Delivery Address</Text>
                  <Icon.ChevronRight stroke="black" />
                </View>
              </View>

              <View style={styles.address}>
                <Text style={styles.textInfoAddress}>Leslie Alexander</Text>
                <Text style={styles.textInfoAddress}>(+84) 0123 456 789</Text>
                <Text style={styles.textInfoAddress}>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </View>
            </Pressable>

            <View style={styles.line1} />

            <View style={styles.itemProductName}>
              <Text style={styles.titleListProduct}>Products</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <>
            <View style={styles.line1} />

            <ShippingMethod method={"Fast"} price={2} time={"2 days"} />

            <View style={styles.line1} />

            <View style={styles.totalProducts}>
              <Text style={styles.textTotalProducts}>
                Subtotal:
              </Text>
              <Text style={styles.textAmount}>$100</Text>
            </View>
            <View style={styles.totalProducts}>
              <Text style={styles.textTotalProducts}>
                Shipping:
              </Text>
              <Text style={styles.textAmount}>$2</Text>
            </View>

            <View style={styles.line1} />

            <View style={styles.voucher}>
              <Text style={styles.textVoucher}>Voucher</Text>
              <View style={styles.choseVoucherContainer}>
                <Text style={styles.choseVoucher}>Choose or enter a code</Text>
                <Icon.ChevronRight
                  stroke="black"
                  strokeWidth={1}
                  width={18}
                  height={18}
                />
              </View>
            </View>

            <View style={styles.line1} />

            <View style={styles.payment}>
              <View style={styles.paymentMethod}>
                <Text style={styles.textMethod}>Payment method</Text>
                <Text style={styles.textPaymentMethod}>Cash</Text>
              </View>

              <RadioButton.Group
                contentContainerStyle={styles.radioGroup}
                onValueChange={(value) => setValue(value)}
                value={value}
              >
                <RadioButton.Item
                  label="Cash"
                  value="cash"
                  labelStyle={styles.labelStyle}
                  color={primaryColor}
                  style={styles.radioItem}
                />
                <RadioButton.Item
                  label="Visa Debit/Credit"
                  disabled={true}
                  value="visa"
                  color={primaryColor}
                  labelStyle={styles.labelStyle}
                  style={styles.radioItem}
                />
                <RadioButton.Item
                  label="ATM Card"
                  disabled={true}
                  value="atm"
                  labelStyle={styles.labelStyle}
                  color={primaryColor}
                  style={styles.radioItem}
                />
                <RadioButton.Item
                  label="Momo"
                  disabled={true}
                  value="momo"
                  labelStyle={styles.labelStyle}
                  color={primaryColor}
                  style={styles.radioItem}
                />
              </RadioButton.Group>
            </View>

            <View style={styles.line1} />

            <View style={styles.totalContainer}>
              <Text style={styles.textTotal}>Total:</Text>
              <Text style={styles.textPrice}>$1,000.00</Text>
            </View>
            <View style={styles.btnOrder}>
              <ButtonApp text="Order" />
            </View>
          </>
        }
        contentContainerStyle={styles.scrollView}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={styles.btnBack} onPress={handleGoBack}>
        <Icon.ChevronLeft stroke="black" />
        <Text style={styles.textPayment}>Payment</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.containerKeyboard}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor={gray3Color}
                      color={blackColor}
                      cursorColor={primaryColor}
                      selectionColor={primaryColor}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="New Password"
                      placeholderTextColor={gray3Color}
                      color={blackColor}
                      cursorColor={primaryColor}
                      selectionColor={primaryColor}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm New Password"
                      placeholderTextColor={gray3Color}
                      color={blackColor}
                      cursorColor={primaryColor}
                      selectionColor={primaryColor}
                    />
                  </View>
                  <View style={styles.btnContainer}>
                    <ButtonApp
                      text={"Save"}
                      onPress={handleCheck}
                      color={whiteColor}
                      textColor={primaryColor}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
