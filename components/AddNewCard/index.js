import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";
import ButtonApp from "../../components/Button";
import * as Icon from "react-native-feather";
import { primaryColor, gray2Color, gray3Color, gray1Color, blackColor, whiteColor } from "../../global/colors";

export default function AddNewCard() {
    return (
        <View style={styles.container}>

            <View style={styles.iconClose}>
                <Icon.X stroke={blackColor} width={24} />
            </View>

            <Text style={styles.addNewCard}>Add New Card</Text>

            <View style={styles.nameCardContainer}>

                <Text style={styles.textNameCard}>Name on card</Text>
                <Text style={styles.nameCard}>Nguyen Quang Thuan</Text>
                <View style={styles.line} />

            </View>
            <View style={styles.numberCardContainer}>

                <Text style={styles.textNumberCard}>Card number</Text>
                <Text style={styles.numberCard}>1234  4567  7890  1234</Text>
                <View style={styles.line} />

            </View>

            <View style={styles.dateAndCvvContainer}>

                <View style={styles.dateContainer}>
                    <Text style={styles.textDate}>Card number</Text>
                    <Text style={styles.date}>02/24</Text>
                    <View style={styles.line1} />
                </View>
                <View style={styles.cvvContainer}>
                    <Text style={styles.textCvv}>CVV</Text>
                    <Text style={styles.cvv}>7899</Text>
                    <View style={styles.line1} />
                </View>
            </View>
            <View style={styles.btnAddCard}>
            <ButtonApp text="Add Card"/>
            </View>
           

        </View>
    );
}
