import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { primaryColor } from "../../global/colors";

export default function DeliveryAddressItem() {
    return (
        <View style={styles.container}>

            <View style={styles.usernameContainer}>

                <Text style={styles.username}>Nguyen Quang Thuan</Text>
                <Text style={styles.status}>[Default]</Text>

            </View>
            <Text style={styles.phoneNumber}>+84 987 654 321</Text>
            <Text style={styles.address}>2972 Westheimer Rd. Santa Ana,
                Illinois 85486 </Text>
            <View style={styles.locationIcon}>
                <Icon.MapPin stroke={primaryColor} />
            </View>



        </View>
    );
}
