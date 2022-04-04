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
import PaymentMethod from "./PaymentMethodScreen/payment_method";

export default function AppProvider() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="SlashScreen"
          component={SlashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VoucherScreen"
          component={VoucherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmOrderScreen"
          component={ConfirmOrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryAddressScreen"
          component={DeliveryAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SupportScreen"
          component={SupportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
