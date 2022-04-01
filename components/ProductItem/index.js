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
  const { name, image, price, onPress } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Pressable onPress={onPress} style={styles.items}>
      <ImageBackground
        onPress={onPress}
        borderRadius={10}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        source={image}
        style={styles.itemImage}
      >
        {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}
        <View style={styles.infoProduct}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>$48{price}</Text>
          <Icon.Heart stroke={"white"} style={styles.iconStyle} />
        </View>
      </ImageBackground>
    </Pressable>
  );
}
