import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import ButtonApp from "../../components/Button";
import { blackColor, whiteColor, primaryColor, gray1Color, gray2Color, gray3Color } from "../../global/colors";

export default function ThankYouScreen() {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator="fasle">

                <View style={styles.iconThankyou}>
                    <Icon.CheckCircle width={240} height={240} color={primaryColor} />
                </View>

                <View style={styles.textThankyou}>
                    <Text style={styles.textThankyouTitle}>Thank you!</Text>
                </View>

                <View style={styles.textInforOrder}>
                    <Text style={styles.textInforOrderTitle}>Your order
                     <Text style={styles.codeOrder}>#132541</Text>
                        is completed.
                        Please check the delivery status at
                        My Order page</Text>
                </View>

                <View style={styles.btnContainer}>
                    <ButtonApp title="OK" color={whiteColor} />
                </View>

            </ScrollView>
        </View>


    );
}
