import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { styles } from "./styles";
import SlashScreen from "./SlashScreen/splash";
import WelcomeScreen from "./WelcomeScreen/welcome";
import LoginScreen from "./LoginScreen/login";
import HomeScreen from "./HomeScreen/main";
import SignUpScreen from "./SignUpScreen/signup";
import ProductScreen from "./ProductScreen/product";
import ForgotPasswordScreen from "./ForgotPasswordScreen/forgot_pass";
import OTPScreen from "./OTPScreen/otp";
import DetailScreen from "./DetailScreen/detail";
import VoucherScreen from "./VoucherScreen/voucher";
import OrderScreen from "./OrderScreen/order";
import ConfirmOrderScreen from "./ConfirmOrderScreen/confirm_order";
import InformationScreen from "./InformationScreen/information";
import DeliveryAddressScreen from "./DeliveryAddress/delivery_address";
import SupportScreen from "./SupportScreen/support";
import PaymentMethodScreen from "./PaymentMethodScreen/payment_method";
import ChangePasswordScreen from "./ChangePasswordScreen/change_password";

export default function AppProvider() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="ConfirmOrderScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SlashScreen" component={SlashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="VoucherScreen" component={VoucherScreen} />
        <Stack.Screen
          name="ConfirmOrderScreen"
          component={ConfirmOrderScreen}
        />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen
          name="DeliveryAddressScreen"
          component={DeliveryAddressScreen}
        />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
