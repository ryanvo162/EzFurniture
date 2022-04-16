import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import ButtonApp from "../../components/Button";
import {
  blackColor,
  whiteColor,
  primaryColor,
  gray1Color,
  gray2Color,
  gray3Color,
} from "../../global/colors";

export default function ThankYouScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const handleGoHome = () => {
    navigation.replace("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <View style={styles.iconThankyou}>
          <Icon.CheckCircle
            strokeWidth={0.8}
            width={240}
            height={240}
            color={primaryColor}
          />
        </View>

        <View style={styles.textThankyou}>
          <Text style={styles.textThankyouTitle}>Thank you!</Text>
        </View>

        <View style={styles.textInforOrder}>
          <Text style={styles.textInforOrderTitle}>
            Your order
            <Text style={styles.codeOrder}> {id} </Text>
            is completed. Please check your order status at My Order page
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <ButtonApp text="OK" color={primaryColor} onPress={handleGoHome} />
        </View>
      </ScrollView>
    </View>
  );
}
