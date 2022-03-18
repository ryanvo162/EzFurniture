import React, { useState } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { styles } from "./style";

export default function ProductItem(props) {
  const { name, image } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ImageBackground borderRadius={20} source={image} style={styles.items}>
      <View style={styles.infoProduct}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </ImageBackground>
  );
}
