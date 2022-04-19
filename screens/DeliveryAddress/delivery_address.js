import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DeliveryAddress from "../../components/DeliveryAddress";
import {
  blackColor,
  whiteColor,
  primaryColor,
  gray2Color,
} from "../../global/colors";
import ButtonApp from "../../components/Button";
import { actions, useStore } from "../../provider";
import { formatPhoneNumber } from "../../global/format";

import { Snackbar } from "react-native-paper";
import { styles as mainStyle } from "../../screens/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DeliveryAddressScreen(props) {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useStore();
  const [address, setAddress] = useState(state.user.addresses[0]?.place ?? "");

  const [status, setStatus] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const data = state.user.addresses;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = async () => {
    setModalVisible(!modalVisible);
    await fetch("https://admin.furniture.bandn.online/mobile/addAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.user.email,
        address: [
          {
            place: address,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.product.status == true) {
          dispatch(
            actions.setAddress([
              {
                _id: 1,
                place: address,
              },
            ])
          );
          setStatus("Add address successfully");
          onToggleSnackBar();
        } else {
          setStatus("Add address failed");
          setAddress(state.user.addresses[0]?.place ?? "");
          onToggleSnackBar();
        }
      })
      .catch((err) => {
        setStatus("Add address failed, check server");
        setAddress(state.user.addresses[0]?.place ?? "");
        onToggleSnackBar();
        console.log(err);
      });
  };

  useEffect(async() => {
    await AsyncStorage.setItem("@data_user", JSON.stringify(state.user));
  }, [state.user]);

  const handleAddNewAddress = () => {
    if (address.length > 0) {
      setStatus("Add address successfully");
      onToggleSnackBar();
    } else {
      setModalVisible(!modalVisible);
    }
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <DeliveryAddress
      name={state.user.name}
      address={item.place}
      status="Default"
      phoneNumber={formatPhoneNumber(state.user.phone)}
      onPress={handleEdit}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={{ paddingTop: 100, paddingBottom: 50 }}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListFooterComponent={
          data.length > 0 ? null : (
            <Pressable
              onPress={handleAddNewAddress}
              style={styles.newDeliveryContainer}
            >
              <View style={styles.btnNewDelivery}>
                <Text style={styles.textNewDelivery}>New delivery address</Text>
                <Icon.Plus stroke={blackColor} strokeWidth={1} />
              </View>
            </Pressable>
          )
        }
      />
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>Delivery Address</Text>
        </Pressable>
      </View>

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
                  <View style={styles.textContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Enter your address"
                      defaultValue={address}
                      placeholderTextColor={gray2Color}
                      selectionColor={primaryColor}
                      onChangeText={(text) => setAddress(text)}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <ButtonApp
                      text={"Save"}
                      onPress={handleSave}
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
