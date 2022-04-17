import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";
import { primaryColor } from "../../global/colors";

export default function DeliveryAddressItem(props) {
  const { onPress, name, status, phoneNumber, address } = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>

      {(address && <Text style={styles.address}>{address}</Text>) || (
        <Text style={styles.addressError}>Click here to edit</Text>
      )}
      <View style={styles.locationIcon}>
        <Icon.MapPin stroke={primaryColor} />
      </View>
    </Pressable>
  );
}
