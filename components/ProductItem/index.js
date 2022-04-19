import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";

export default function ProductItem(props) {
  const { name, image, price, onPress, id } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleChoose = () => {
    onPress(id);
  };

  return (
    <Pressable onPress={handleChoose} style={styles.items}>
      <ImageBackground
        borderRadius={5}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        source={image !== "Error: No files found" ? { uri: image } : require("../../assets/img/error.png")}
        style={styles.itemImage}
      >
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}
        <View style={styles.infoProduct}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.price}>${price}</Text>
          <Icon.Heart
            stroke={"white"}
            width={16}
            height={16}
            style={styles.iconStyle}
          />
        </View>
      </ImageBackground>
    </Pressable>
  );
}
