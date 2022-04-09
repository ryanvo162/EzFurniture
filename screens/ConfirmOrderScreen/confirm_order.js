import React, { useState } from "react";
import {
  View, Text, ScrollView,
  Modal,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./style";
import { RadioButton } from 'react-native-paper';
import * as Icon from "react-native-feather";
import ComfirmProductItem from "../../components/ComfirmProductItem";
import ShippingMethod from "../../components/ShippingMethod";
import ButtonApp from "../../components/Button";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";

export default function ConfirmOrderScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleDeliveryAddress = () => {
    setModalVisible(true)
  }
  const handleCheck = () => { setModalVisible(!modalVisible) }
  const [value, setValue] = React.useState('cash');

  return (
    <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator="fasle" >

      <View style={styles.container}>

        <View style={styles.btnBack}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.textPayment}>Payment</Text>
        </View>

        <View style={styles.line1} />

        <View style={styles.location} >
          <Icon.MapPin stroke="#DDAC8B" />
          <Text style={styles.textDelivery}>Delivery address</Text>
          <Icon.ChevronRight stroke="black" onPress={handleDeliveryAddress} />
        </View>

        <View style={styles.address}>
          <Text style={styles.textAddress}>Leslie Alexander | (+84) 0123 456 789,
            4517 Washington Ave. Manchester, Kentucky 39495</Text>
        </View>

        <View style={styles.line1} />

        <View style={styles.itemProductName}>
          <Text style={styles.brand}>Furniture </Text>
          <Text style={styles.productName}> Table Green </Text>
        </View>

        <ComfirmProductItem />

        <View style={styles.line1} />

        <ShippingMethod />

        <View style={styles.line1} />

        <View style={styles.totalProducts}>
          <Text style={styles.textTotalProducts}>Total amount ( 1 product ):</Text>
          <Text style={styles.textAmount}>$1,000.00</Text>
        </View>

        <View style={styles.line1} />

        <View style={styles.voucher}>
          <Text style={styles.textVoucher}>Voucher</Text>
          <View style={styles.choseVoucherContainer}>
            <Text style={styles.choseVoucher}>Choose or enter a code</Text>
            <Icon.ChevronRight stroke="black" strokeWidth={1} width={18} height={18} />
          </View>
        </View>

        <View style={styles.line1} />

        <View style={styles.payment}>
          <View style={styles.paymentMethod}>
            <Text style={styles.textMethod}>Payment method</Text>
            <Text style={styles.textPaymentMethod}>Cash</Text>
          </View>

          <RadioButton.Group contentContainerStyle={styles.radioGroup} onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item label="Cash" value="cash" labelStyle={styles.labelStyle} color={primaryColor} style={styles.radioItem} />
            <RadioButton.Item label="Visa Debit/Credit" value="visa" color={primaryColor} labelStyle={styles.labelStyle} style={styles.radioItem} />
            <RadioButton.Item label="ATM Card" value="atm" labelStyle={styles.labelStyle} color={primaryColor} style={styles.radioItem} />
            <RadioButton.Item label="Momo" value="momo" labelStyle={styles.labelStyle} color={primaryColor} style={styles.radioItem} />
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerKeyboard} >
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
                        selectionColor={primaryColor} />
                      <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        placeholderTextColor={gray3Color}
                        color={blackColor}
                        cursorColor={primaryColor}
                        selectionColor={primaryColor} />
                      <TextInput
                        style={styles.input}
                        placeholder="Confirm New Password"
                        placeholderTextColor={gray3Color}
                        color={blackColor}
                        cursorColor={primaryColor}
                        selectionColor={primaryColor} />
                    </View >
                    <View style={styles.btnContainer}>
                      <ButtonApp text={'Save'} onPress={handleCheck} color={whiteColor} textColor={primaryColor} />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </Modal>

      </View>

    </ScrollView>
  );
}
