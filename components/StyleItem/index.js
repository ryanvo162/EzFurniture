import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { styles } from "./style";

export default function StyleItem(props) {
  const { name, image } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ImageBackground
      borderRadius={20}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
      style={styles.items}
      resizeMode="cover"
      source={image}
    >
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color="white" />
        </View>
      )}
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}> {props.name} </Text>
      </View>
    </ImageBackground>
  );
}
