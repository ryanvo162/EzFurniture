import React, { useState, useEffect } from "react";
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

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../screens/styles";

import { useStore } from "../../provider";
import { formatDisplayPrice, formatPhoneNumber } from "../../global/format";
import { ENDPOINT } from "../../socket.io-client/link";
import { io } from "socket.io-client";

export default function ConfirmOrderScreen(props) {
  const { navigation, route } = props;
  const { data, subTotal, isDelete } = route.params;
  const [state, dispatch] = useStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [products, setProducts] = useState([]);

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleDeliveryAddress = () => {
    setModalVisible(!modalVisible);
  };

  const handleChooseShippingMethod = () => {
    setModalVisible1(!modalVisible1);
  };

  const handleCheck = () => {
    setModalVisible(!modalVisible);
  };

  const handleCancel = () => {
    setModalVisible1(!modalVisible1);
  };

  const handleGoToDetail = (id) => {
    navigation.navigate("DetailScreen", { id: id });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const Item = ({ item }) => (
    <ConfirmProductItem
      id={item.id}
      title={item.name}
      image={item.image}
      price={item.price}
      quantity={item.quantity}
      onPress={handleGoToDetail}
    />
  );

  const renderItem = ({ item }) => <Item item={item} />;

  const [paymentMethod, setPaymentMethod] = useState("cash");
  //info location
  const [address, setAddress] = useState(state.user?.addresses[0]?.place ?? "");
  const [phone, setPhone] = useState(
    formatPhoneNumber(state.user?.phone) ?? ""
  );
  const [name, setName] = useState(state.user?.name ?? "");
  //shipping method
  const [shippingMethod, setShippingMethod] = useState("fast");
  const [shippingPrice, setShippingPrice] = useState(2);
  const [estimate, setEstimate] = useState("1-2 days");
  const handleChangeShippingMethod = (method) => {
    if (method === "fast") {
      setShippingMethod(method);
      setShippingPrice(2);
      setEstimate("1-2 days");
      setModalVisible1(!modalVisible1);
    } else if (method === "normal") {
      setShippingMethod(method);
      setShippingPrice(0);
      setEstimate("3-5 days");
      setModalVisible1(!modalVisible1);
    } else if (method === "express") {
      setShippingMethod(method);
      setShippingPrice(4);
      setEstimate("4-7hrs");
      setModalVisible1(!modalVisible1);
    }
  };

  //voucher
  const handleChooseVoucher = () => {
    setStatus("Feature is developing");
    onToggleSnackBar();
  };

  useEffect(() => {
    setProducts([]);
    data.map((item) => {
      setProducts((products) => [...products, { product_id: item.id }]);
    });
  }, []);

  //checkout
  const handleCheckout = async () => {
    if (
      name === "" ||
      phone === "" ||
      address === "" ||
      shippingMethod === ""
    ) {
      setStatus("Please fill all information");
      onToggleSnackBar();
    } else {
      let isOnline;
      if (paymentMethod === "cash") {
        isOnline = false;
      } else {
        isOnline = true;
      }
      await fetch(
        "https://admin.furniture.bandn.online/order/create_payment_url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Address: address,
            phone: phone,
            name: name,
            transportation: {
              name: shippingMethod,
              price: shippingPrice,
            },
            price: subTotal + shippingPrice,
            voucher: 0,
            isOnlinePayment: isOnline,
            customer_id: state.user.id,
            status: "request",
            info_payment: {},
            infoATM: {
              bankCode: "",
              amount: (subTotal + shippingPrice) * 22000,
              orderDescription: "Thanh toán đơn hàng EzFurniture",
              orderType: "billpayment",
              language: "vn",
            },
            products_id: products,
            isDelete: isDelete,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            if (res.payload) {
              if (res.payload.status === true) {
                navigation.replace("ThankYouScreen", {
                  id: res.payload.data._id,
                });
              }
            } else {
              navigation.navigate("VNPayScreen", {
                uri: res.vnpUrl,
                data: {
                  Address: address,
                  phone: phone,
                  name: name,
                  transportation: {
                    name: shippingMethod,
                    price: shippingPrice,
                  },
                  price: subTotal + shippingPrice,
                  voucher: 0,
                  isOnlinePayment: isOnline,
                  customer_id: state.user.id,
                  infoATM: {
                    bankCode: "",
                    amount: (subTotal + shippingPrice) * 22000,
                    orderDescription: "Thanh toán đơn hàng EzFurniture",
                    orderType: "billpayment",
                    language: "vn",
                  },
                  products_id: products,
                  isDelete: isDelete,
                },
              });
            }
          }
        })
        .catch((err) => {
          setStatus("Check server and try again");
          onToggleSnackBar();
          console.error(err);
        });
    }
  };

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
                <Text style={styles.textInfoAddress}>{name}</Text>
                <Text style={styles.textInfoAddress}>{phone}</Text>
                {address !== "" ? (
                  <Text style={styles.textInfoAddress}>{address}</Text>
                ) : (
                  <Text style={styles.textInfoAddressError}>
                    Choose your delivery address
                  </Text>
                )}
              </View>
            </Pressable>

            <View style={styles.line1} />

            <View style={styles.itemProductName}>
              <View style={styles.viewTitleProduct}>
                <Text style={styles.titleListProduct}>Products</Text>
              </View>
            </View>
          </>
        }
        ListFooterComponent={
          <>
            <View style={styles.line1} />

            <ShippingMethod
              method={shippingMethod}
              price={shippingPrice}
              time={estimate}
              onPress={handleChooseShippingMethod}
            />

            <View style={styles.line1} />

            <View style={styles.totalProducts}>
              <Text style={styles.textTotalProducts}>Subtotal:</Text>
              <Text style={styles.textAmount}>
                {formatDisplayPrice(subTotal)}
              </Text>
            </View>
            <View style={styles.totalProducts1}>
              <Text style={styles.textTotalProducts}>Shipping:</Text>
              <Text style={styles.textAmount}>
                {formatDisplayPrice(shippingPrice)}
              </Text>
            </View>

            <View style={styles.line1} />

            <Pressable onPress={handleChooseVoucher} style={styles.voucher}>
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
            </Pressable>

            <View style={styles.line1} />

            <View style={styles.payment}>
              <View style={styles.paymentMethod}>
                <Text style={styles.textMethod}>Payment method</Text>
                <Text style={styles.textPaymentMethod}>Cash</Text>
              </View>

              <RadioButton.Group
                contentContainerStyle={styles.radioGroup}
                onValueChange={(value) => setPaymentMethod(value)}
                value={paymentMethod}
              >
                <RadioButton.Item
                  label="Cash"
                  value="cash"
                  labelStyle={styles.labelStyle}
                  color={primaryColor}
                  style={styles.radioItem}
                />
                <RadioButton.Item
                  label="Online"
                  value="online"
                  labelStyle={styles.labelStyle}
                  color={primaryColor}
                  style={styles.radioItem}
                />
              </RadioButton.Group>
            </View>

            <View style={styles.line1} />

            <View style={styles.totalContainer}>
              <Text style={styles.textTotal}>Total:</Text>
              <Text style={styles.textPrice}>
                {formatDisplayPrice(subTotal + shippingPrice)}
              </Text>
            </View>
            <View style={styles.btnOrder}>
              <ButtonApp onPress={handleCheckout} text="Order" />
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
                      placeholder="Name"
                      placeholderTextColor={gray3Color}
                      defaultValue={name}
                      onChangeText={(text) => setName(text)}
                      color={blackColor}
                      cursorColor={primaryColor}
                      selectionColor={primaryColor}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Phone"
                      defaultValue={phone}
                      onChangeText={(text) => setPhone(text)}
                      placeholderTextColor={gray3Color}
                      color={blackColor}
                      cursorColor={primaryColor}
                      selectionColor={primaryColor}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Address"
                      defaultValue={address}
                      onChangeText={(text) => setAddress(text)}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RadioButton.Group
              contentContainerStyle={styles.radioGroup}
              onValueChange={handleChangeShippingMethod}
              value={shippingMethod}
            >
              <RadioButton.Item
                label="Fast"
                value="fast"
                labelStyle={styles.labelStyle}
                color={primaryColor}
                style={styles.radioItem}
              />
              <RadioButton.Item
                label="Normal"
                value="normal"
                labelStyle={styles.labelStyle}
                color={primaryColor}
                style={styles.radioItem}
              />
              <RadioButton.Item
                label="Express"
                value="express"
                labelStyle={styles.labelStyle}
                color={primaryColor}
                style={styles.radioItem}
              />
            </RadioButton.Group>
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
    </View>
  );
}
