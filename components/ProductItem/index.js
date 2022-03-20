import React, { useState } from "react";
import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { styles } from "./style";

export default function ProductItem(props) {
  const { name, image } = props;
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
      </View>
    </ImageBackground>
  );
}
