import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import DeliveryAddress from "../../components/DeliveryAddress";
import { blackColor } from "../../global/colors";

export default function DeliveryAddressScreen() {
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.headerLeft}>
                    <Icon.ChevronLeft stroke="black" />
                    <Text style={styles.headerLeftText}>Delivery Address</Text>
                </Pressable>
            </View>

             <DeliveryAddress />

            <Pressable style={styles.newDeliveryContainer}>
                <View style={styles.btnNewDelivery}>
                    <Text style={styles.textNewDelivery}>Delivery Address</Text>
                    <Icon.Plus stroke={blackColor} strokeWidth={1} />
                </View>
            </Pressable>

        </View>
    );
}
