import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import SearchBar from "../../components/SearchBar/index";
import { blackColor } from "../../global/colors";

export default function SupportScreen() {
    const handleGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>

            <ScrollView>

            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.headerLeft}>
                    <Icon.ChevronLeft stroke="black" />
                    <Text style={styles.headerLeftText}>Delivery Address</Text>
                </Pressable>
            </View>

            <SearchBar />

            <View style={styles.line1} />

            <Text style={styles.faq}>FAQ</Text>

            <View style={styles.line2} />

            <View style={styles.questionContainer}>
                <Text style={styles.textQuestion}>[Shipping Information] How to contact shipping / Look up shipping information / Exchange delivery?</Text>
                <Icon.ChevronRight stroke={blackColor} strokeWidth={2} />
            </View>
            <View style={styles.line2} />
            <View style={styles.questionContainer}>
                <Text style={styles.textQuestion}>[New member] EZ Furniture's return and refund process?</Text>
                <Icon.ChevronRight stroke={blackColor} strokeWidth={2} />
            </View>
            <View style={styles.line2} />
            <View style={styles.questionContainer}>
                <Text style={styles.textQuestion}>[Order] What should I do if I haven't received my order/Order status update is wrong?</Text>
                <Icon.ChevronRight stroke={blackColor} strokeWidth={2} />
            </View>
            <View style={styles.line2} />
            <View style={styles.questionContainer}>
                <Text style={styles.textQuestion}>[Shipping Information] How to contact shipping / Look up shipping information / Exchange delivery?</Text>
                <Icon.ChevronRight stroke={blackColor} strokeWidth={2} />
            </View>
            <View style={styles.line2} />

            </ScrollView>
            
        </View>
    );
}
