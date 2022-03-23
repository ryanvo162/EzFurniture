import React, { useState } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { styles } from "./style";
import * as Icon from "react-native-feather";

export default function ProductItem(props) {
  const { name, image, price } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ImageBackground
      borderRadius={20}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
      source={image}
      style={styles.items}
    >
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color="white" />
        </View>
      )}
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>123.456{price}</Text>
        <Icon.Heart stroke={"white"} style={styles.iconStyle} />
      </View>
    </ImageBackground>
  );
}
