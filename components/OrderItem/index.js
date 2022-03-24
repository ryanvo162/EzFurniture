import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, Pressable } from "react-native";

import * as Icon from "react-native-feather";
import { styles } from "./style";

export default function OrderItem(props) {
  const { image, date, onPress, total, statusOrder, address, id } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Pressable onPress={onPress} style={styles.items}>
      <View style={styles.imageView}>
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={image}
          style={styles.image}
        />
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>ID:</Text>
          <Text style={styles.contentItem}>{id}</Text>
        </View>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>Total:</Text>
          <Text style={styles.contentItem}>{total}</Text>
        </View>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>Order date:</Text>
          <Text style={styles.contentItem}>{date}</Text>
        </View>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>Status:</Text>
          <Text style={styles.contentItem}>{statusOrder}</Text>
        </View>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>Address:</Text>
          <Text style={styles.contentItem}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
}
