import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";
import { RadioButton } from "react-native-paper";
import * as Icon from "react-native-feather";
import {
  primaryColor,
  gray2Color,
  gray3Color,
  gray1Color,
  blackColor,
  whiteColor,
} from "../../global/colors";
import AddNewCard from "../../components/AddNewCard";

export default function PaymentMethodScreen(props) {
  const { navigation } = props;
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [value, setValue] = useState("cash");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleGoBack} style={styles.headerLeft}>
          <Icon.ChevronLeft stroke="black" />
          <Text style={styles.headerLeftText}>Payment method</Text>
        </Pressable>

        <Pressable style={styles.addNewCardContainer}>
          <Icon.Plus stroke={primaryColor} width={16} />
          <Text style={styles.addNewCardText}>Add new card</Text>
        </Pressable>
      </View>

      <Image
        style={styles.imageCard}
        source={require("../../assets/img/card_payment_method.png")}
      />

      <Text style={styles.textOrtherPayment}> Other Payment Options </Text>

      <RadioButton.Group
        contentContainerStyle={styles.radioGroup}
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <RadioButton.Item
          label="PayPal"
          value="visa"
          color={primaryColor}
          labelStyle={styles.labelStyle}
          style={styles.radioItem}
        />
        <RadioButton.Item
          label="Google Pay"
          value="atm"
          labelStyle={styles.labelStyle}
          color={primaryColor}
          style={styles.radioItem}
        />
        <RadioButton.Item
          label="Momo"
          value="momo"
          labelStyle={styles.labelStyle}
          color={primaryColor}
          style={styles.radioItem}
        />
      </RadioButton.Group>

      {/* <AddNewCard/> */}
    </View>
  );
}
