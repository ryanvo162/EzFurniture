import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  Pressable,
} from "react-native";
import { styles } from "./style";

export default function StyleNewItem(props) {
  const { name, image, id, onPress } = props;
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
        style={styles.itemImage}
        resizeMode="cover"
        source={{ uri: image }}
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
    </Pressable>
  );
}
