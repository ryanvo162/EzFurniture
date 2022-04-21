import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, Pressable } from "react-native";

import * as Icon from "react-native-feather";
import { styles } from "./style";

export default function OrderItem(props) {
  const { image, date, onPress, total, statusOrder, address, id, isOnline } =
    props;
  const [isLoading, setIsLoading] = useState(true);
  const handleChoose = () => {
    onPress(id);
  };
  return (
    <Pressable onPress={handleChoose} style={styles.items}>
      <View style={styles.imageView}>
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={
            statusOrder === "Request"
              ? {
                  uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fpackage-box2.png?alt=media&token=34d8cf16-998d-4312-8192-ab5f4213355f",
                }
              : {
                  uri: "https://firebasestorage.googleapis.com/v0/b/furniture-upload-img.appspot.com/o/icon%2Fpackage-box.png?alt=media&token=dbd12c1d-ffc4-4637-8451-0785e54b69d0",
                }
          }
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
          <Text
            style={styles.contentItem}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {id}
          </Text>
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
          <Text
            style={styles.contentItem}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {address}
          </Text>
        </View>
        <View style={styles.innerContent}>
          <Text style={styles.titleItem}>Payment:</Text>
          <Text style={styles.contentItem}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
