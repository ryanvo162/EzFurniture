import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { useStore } from "../../../provider";

export default function ProfileTab(props) {
  const { navigation } = props;
  const [state, dispatch] = useStore();
  const handleGoToOrder = () => {
    navigation.navigate("OrderScreen");
  };
  const handleGoToPaymentMethod = () => {
    navigation.navigate("PaymentMethodScreen");
  };
  const handleGoToDeliveryAddress = () => {
    navigation.navigate("DeliveryAddressScreen");
  };
  const handleGoToVouchers = () => {
    navigation.navigate("VoucherScreen");
  };
  const handleGoToInformation = () => {
    navigation.navigate("InformationScreen");
  };
  const handleGoToSupport = () => {
    navigation.navigate("SupportScreen");
  };
  const handleLogout = () => {
    navigation.replace("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 80,
          paddingBottom: 100,
        }}
      >
        {/* headerView */}
        <View style={styles.profileUser}>
          <Image source={{ uri: state.user.avatar }} style={styles.imageUser}></Image>

          <View style={styles.profileInfoUser}>
            <Text style={styles.nameUser}>{state.user.name}</Text>
            <Text style={styles.gmailUser}>{state.user.email}</Text>
          </View>
        </View>
        {/* Functions list */}
        <View style={styles.functionsList}>
          <Pressable onPress={handleGoToOrder} style={styles.items}>
            <Icon.Package
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>My Order</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleGoToPaymentMethod} style={styles.items}>
            <Icon.CreditCard
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Payment method</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleGoToDeliveryAddress} style={styles.items}>
            <Icon.MapPin
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Delivery address</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleGoToVouchers} style={styles.items}>
            <Icon.Gift stroke="#fff" strokeWidth={1.5} height={30} width={30} />
            <Text style={styles.itemsText}>Gift card &amp; vouchers</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleGoToInformation} style={styles.items}>
            <Icon.User stroke="#fff" strokeWidth={1.5} height={30} width={30} />
            <Text style={styles.itemsText}>Information</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleGoToSupport} style={styles.items}>
            <Icon.HelpCircle
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Support</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>

          <Pressable onPress={handleLogout} style={styles.items}>
            <Icon.LogOut
              stroke="#fff"
              strokeWidth={1.5}
              height={30}
              width={30}
            />
            <Text style={styles.itemsText}>Logout</Text>

            <View style={styles.iconNext}>
              <Icon.ChevronRight stroke="#fff" />
            </View>
          </Pressable>
          <View style={styles.hr}></View>
        </View>
      </ScrollView>
    </View>
  );
}
